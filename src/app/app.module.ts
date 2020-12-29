import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EuropeanCountriesComponent } from './countries/european-countries/european-countries.component';
import { AsianCountriesComponent } from './countries/asian-countries/asian-countries.component';
import { AfricanCountriesComponent } from './countries/african-countries/african-countries.component';
import { AmericanCountriesComponent } from './countries/american-countries/american-countries.component';
import { OceanianCountriesComponent } from './countries/oceanian-countries/oceanian-countries.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, // To-Do look more into this
  {path: 'home', component: HomeComponent},
  {path: 'countries-list', component: CountriesListComponent},
  {path: 'navigation-form', component: NavigationFormComponent},
  {path: 'european-countries', component: EuropeanCountriesComponent},
  {path: 'american-countries', component: AmericanCountriesComponent},
  {path: 'asian-countries', component: AsianCountriesComponent},
  {path: 'african-countries', component: AfricanCountriesComponent},
  {path: 'oceanian-countries', component: OceanianCountriesComponent},
];



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent,
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    HttpClientModule,
    NavigationFormModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
