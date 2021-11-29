import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './countries/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  country: Country;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v2/all');
  }

  getEuropeanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/region/europe');
  }

  getAsianCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/region/asia');
  }

  getAmericanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v3.1/region/americas');
  }

  getOceaniaCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/region/Oceania');
  }

  getAfricanCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v2/region/africa');
  }

  getCountryInfo(country: string){
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/name/' + country);
  }
}
