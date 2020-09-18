import { NavFormModule } from './nav-form/nav-form/nav-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductsModule } from './products/products.module';
import { CountriesListComponent } from './countries/countries-list/countries-list.component';
import { NavFormComponent } from './nav-form/nav-form/nav-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'countries-list', component: CountriesListComponent},
  {path: 'nav-form', component: NavFormComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CountriesListComponent,
    NavFormComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    NgModule,
    NavFormModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
