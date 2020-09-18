import { CountriesModule } from './countries/countries/countries.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { NavigationFormComponent } from './navigation-form/navigation-form/navigation-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavigationFormModule } from './navigation-form/navigation-form.module';


const appRoutes: Routes = [
  {path: 'countries-list', component: CountriesListComponent},
  {path: 'navigation-form', component: NavigationFormComponent},
];



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    HttpClientModule,
    NavigationFormModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
