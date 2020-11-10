import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse, Users } from '../shared/interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null);

  constructor(private http: HttpClient) { }

  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue(): UserResponse {
    return this.user.getValue();
  }

  login(authData: Users): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
      .pipe(
        map((user: UserResponse) => {
          if( user.message == "OK" ){
            this.saveLocalStorage(user);
            this.user.next(user);
            return user;
          }else{
            window.alert(user.message);
          }
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.user.next(null);
  }

  private saveLocalStorage(user: UserResponse): void {
    const { userId, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
