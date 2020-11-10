import { Observable } from 'rxjs';
import { StockService } from './../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Prod } from 'src/app/shared/interfaces/prod.interface';

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
