import { CountriesListComponent } from './../countries-list/countries-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CountriesListComponent],
  imports: [
    CommonModule
  ],
  exports: [CountriesListComponent]
})
export class CountriesModule { }
