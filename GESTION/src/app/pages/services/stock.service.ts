import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }

  onProd(){
    return this.http
      .get<any>(`${environment.API_URL}/prod`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  chargeMarcas(){
    return this.http
      .get<any>(`${environment.API_URL}/marcas`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  chargeModelos(){
    return this.http
      .get<any>(`${environment.API_URL}/modelos`)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

}
