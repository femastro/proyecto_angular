import { StockService } from './../../../pages/services/stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { UserResponse } from '../../interfaces/user.interface';
import { Prod } from '../../interfaces/prod.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin= null;
  isLogged: boolean;

  prod : Prod;

  private destroy$ = new Subject<any>();

  constructor(
    private authSvc: AuthService,
    private stockSvc: StockService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.authSvc.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        this.isAdmin = user?.role;
        console.log(this.isAdmin);
        this.isLogged = this.isAdmin?true : false;
      });
  }

  onLogout(): void {
    this.authSvc.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
    this.router.navigate(['/']);
  }

  onSearch(data: number){
    this.stockSvc.search(data)
        .subscribe( 
          (res) => this.prod = res 
        );
  }

}
