import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onLogin(){
    const authData = this.formLogin.value;
    this.authSvc.login(authData).subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }

}
