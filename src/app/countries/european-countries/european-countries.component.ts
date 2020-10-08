import { Country } from './../countries/country';
import { CountriesService } from '../countries.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-european-countries',
  templateUrl: './european-countries.component.html',
  styleUrls: ['./european-countries.component.scss'],
})
export class EuropeanCountriesComponent implements OnInit {
  closeResult = '';
  europeancountries: Country[];
  selectedCountry: any;

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countryService.getEuropeanCountries().subscribe((data) => {
      this.europeancountries = data;
    });
  }

  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));
    this.selectedCountry = (this.countryService.getCountryInfo(country));

    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

  onOpenModal() {}
}
