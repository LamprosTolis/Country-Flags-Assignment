import { OceanianCountriesComponent } from '../oceanian-countries/oceanian-countries.component';
import { AfricanCountriesComponent } from '../african-countries/african-countries.component';
import { AmericanCountriesComponent } from '../american-countries/american-countries.component';
import { AsianCountriesComponent } from '../asian-countries/asian-countries.component';
import { EuropeanCountriesComponent } from '../european-countries/european-countries.component';
import { RouterModule } from '@angular/router';
import { CountriesListComponent } from './../countries-list/countries-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CountriesListComponent, EuropeanCountriesComponent,
                AsianCountriesComponent, AmericanCountriesComponent, AfricanCountriesComponent, OceanianCountriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CountriesListComponent]
})
export class CountriesModule { }
