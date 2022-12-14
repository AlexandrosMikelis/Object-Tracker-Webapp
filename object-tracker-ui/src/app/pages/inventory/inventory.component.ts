import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
/**
 * This component is the starting page for the activation part of the application
 */
export class InventoryComponent implements OnInit {
  inventory:any= ["object1", "object2"];
  inventoryForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.getObjects();
    console.log(this.inventory);
    // this.inventoryForm = this.fb.group({
    //   object1:['',
    //   [],
    //   ],
    //   object2:['',
    //   [],
    // ],
    // });
  }

  getObjects(){
  }

  // createDynamicForm(surveyTemplate: any) {
  //   let form = {};

  //   for (let objects_ of this.inventory) {
  //     for (let object of objects_) {
  //       form[object.Id] = new FormControl();
  //     }
  //   }
  //   form["comments"] = new FormControl();
  //   this.surveyDynamicForm = new FormGroup(form);
  //   this.evaluationInput.templateId = surveyTemplate[0].templateId;
  // }

}
