import { NavFormComponent } from './nav-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavFormComponent
  ]
})
export class NavFormModule { }
