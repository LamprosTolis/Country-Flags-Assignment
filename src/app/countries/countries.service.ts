import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './countries/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/');
  }

  getEuropeanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/europe');
  }

  getAsianCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/Asia');
  }

  getAmericanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/Americas');
  }

  getOceaniaCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/Oceania');
  }

  getAfricanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/Africa');
  }
}
