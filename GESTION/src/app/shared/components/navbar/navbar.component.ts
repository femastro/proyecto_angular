import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { UserResponse } from '../../interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin= null;
  isLogged: boolean;

  private destroy$ = new Subject<any>();

  constructor(
    private authSvc: AuthService, 
    private router : Router
  ) { }

  ngOnInit(): void {
    this.authSvc.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        this.isAdmin = user?.role;
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

}
