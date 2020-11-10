import { StockService } from './../services/stock.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  prods = [];

  constructor(private stockSvc: StockService) { }

  ngOnInit(): void {

    this.stockSvc.onProd().subscribe((res) => {
      this.prods = res;
    });

  }

}
