import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  onStock(){
    return this.http
      .get<any>(`${environment.API_URL}/prod`)
      .pipe(
        map((user) => {
          return user;
        })
      );
  }


}
