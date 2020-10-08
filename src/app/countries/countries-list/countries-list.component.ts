import { CountriesService } from './../countries.service';
import { Country } from './../Countries/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries: Country[];
  europeancountries: Country[];
  selectedCountry: any;


  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
    this.countries = data;
    });
  }

  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));
    this.selectedCountry = (this.countryService.getCountryInfo(country));

    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }
}
