import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
