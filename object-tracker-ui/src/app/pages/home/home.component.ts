import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
/**
 * This component is the starting page for the activation part of the application
 */
export class HomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit() {

  }

  Start() {
    this.router.navigate(['./workspace'])
  }

  Guide() {

  }

}
