import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
/**
 * This component is the starting page for the activation part of the application
 */
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordShowing: boolean = false;
  rePasswordShowing: boolean = false;
  invalidCredentials: boolean = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['',
        [Validators.required],
      ],
      username: ['',[Validators.required]],
      // password: ['User1234!', [Validators.required]],
      password: ['',[Validators.required]],
      repassword:['',[Validators.required]]
    });
  }

  handlePasswordVisibility() {
    let password = document.getElementById('register-password-input');
    password?.setAttribute('type', this.passwordShowing ? 'password' : 'text');
    this.passwordShowing = !this.passwordShowing;
  }
  handleRePasswordVisibility() {
    let repassword = document.getElementById('register-repassword-input');
    repassword?.setAttribute('type', this.rePasswordShowing ? 'password' : 'text');
    this.rePasswordShowing = !this.rePasswordShowing;
  }

  onRegisterSubmit(){
    let user = this.registerForm.value;
    console.log(user);
    this.router.navigate(['./home'])
  }

}
