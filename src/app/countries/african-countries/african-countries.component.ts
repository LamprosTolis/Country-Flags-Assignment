import { CountriesService } from '../countries.service';
import { Country } from '../countries/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-african-countries',
  templateUrl: './african-countries.component.html',
  styleUrls: ['./african-countries.component.scss']
})
export class AfricanCountriesComponent implements OnInit {

  africancountries: Country[];
  selectedCountry: any;

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getAfricanCountries().subscribe((data) => {
      this.africancountries = data;
  });
  }

  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));
    this.selectedCountry = (this.countryService.getCountryInfo(country));
  
    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

}
