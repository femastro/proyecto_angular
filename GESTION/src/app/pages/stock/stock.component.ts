import { StockService } from './../services/stock.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  prods = [];
  marcas = [];
  modelos = [];

  constructor(private stockSvc: StockService) { }

  ngOnInit(): void {

    this.stockSvc.onProd().subscribe((res) => {
      this.prods = res;
    });

    this.stockSvc.chargeMarcas().subscribe((res) => {
      this.marcas = res;
    });

    this.stockSvc.chargeModelos().subscribe((res) => {
      this.modelos = res;
    });

  }

  selectMarca(dato: string){
    console.log("Dato -> ", dato);
    this.stockSvc.searchMarca(dato).subscribe((res) => {
      this.prods = res;
    });
  }

}
