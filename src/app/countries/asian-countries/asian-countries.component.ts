import { Country } from '../countries/country';
import { CountriesService } from '../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asian-countries',
  templateUrl: './asian-countries.component.html',
  styleUrls: ['./asian-countries.component.scss']
})
export class AsianCountriesComponent implements OnInit {

  asiancountries: Country[];
  selectedCountry: any;
  
  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getAsianCountries().subscribe((data) => {
    this.asiancountries = data;
  });
 }

 onGetCountryInfo(country: string) {
  alert('Selected Country' + JSON.stringify(country));
  this.selectedCountry = (this.countryService.getCountryInfo(country));

  // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
  return this.selectedCountry;
}

}
