import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
/**
 * This component is the starting page for the activation part of the application
 */
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordShowing: boolean = false;
  invalidCredentials: boolean = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',
        [Validators.required],
      ],
      // password: ['User1234!', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onForgotPassword(){}

  handlePasswordVisibility() {
    let password = document.getElementById('login-password-input');
    password?.setAttribute('type', this.passwordShowing ? 'password' : 'text');
    this.passwordShowing = !this.passwordShowing;
  }


  onLoginSubmit(){
    const user = this.loginForm.value;

    if(user.email == "admin@gmail.com" && user.password == "admin1234"){
      this.router.navigate(['/workspace'])
    }
    else{
      console.log("error")
    }
  }

  onNoAccount(){
    this.router.navigate(['/register'])
  }

}
