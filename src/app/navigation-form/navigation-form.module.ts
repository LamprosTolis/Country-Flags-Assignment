import { FooterComponent } from './../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationFormComponent } from './navigation-form/navigation-form.component';



@NgModule({
  declarations: [
    NavigationFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationFormComponent,
  ]
})

export class NavigationFormModule { }
