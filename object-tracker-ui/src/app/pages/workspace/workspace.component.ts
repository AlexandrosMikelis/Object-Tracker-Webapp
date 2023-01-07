import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription,interval, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
/**
 * This component is the starting page for the activation part of the application
 */
export class WorkspaceComponent implements OnInit {
  inventory:any= ["object1", "object2"];
  inventoryForm!:FormGroup;
  workspaceConfiguration!:FormGroup;
  isConfigSpace:boolean = false;
  private ctx: any;
  sub: any;
  curr_x!:number;
  curr_y!:number;

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement> ;

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
    // this.http.get('http://127.0.0.1:8000/api/products/').subscribe(response => {
    //   this.inventory = response;
    //   console.log(response)
    // });
  }
  onSubmit(){
    this.router.navigate(['./inventory'])
  }
  addWorkspace(){
    this.isConfigSpace = true;
    this.workspaceConfiguration = this.fb.group({
      workspaceName:[''],
      x_range:[],
      y_range:[],
      input_side:[]
    })

    this.sub = interval(1000)
    .subscribe((val: any) => {
      val = this.workspaceConfiguration.value;
      if (this.curr_x!=val.x_range || this.curr_y!= val.y_range){
        this.curr_x = val.x_range;
        this.curr_y = val.y_range;
        this.drawLine(val.x_range,val.y_range)
      }
    });
  }

  drawLine(x:number,y:number){
    if(x==null || y==null){
      return;
    }
    console.log(x,y);
    var canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context?.clearRect(0, 0, canvas.width, canvas.height);
    context?.beginPath();
    context?.moveTo(x, 300);
    context?.lineTo(y, 0);
    // context.lineWidth = 10;

      // set line color
    // context.strokeStyle = '#ff0000';
    context?.stroke();
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


export class Line{
  constructor(private ctx: CanvasRenderingContext2D){}
  draw(x:number, y:number){
    this.ctx.beginPath();
    this.ctx.lineWidth=10;
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(x,y);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}
