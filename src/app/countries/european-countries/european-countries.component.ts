import { CountriesService } from '../countries.service';
import { Country } from '../countries/country';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-european-countries',
  templateUrl: './european-countries.component.html',
  styleUrls: ['./european-countries.component.scss']
})
export class EuropeanCountriesComponent implements OnInit {

  europeancountries: Country[];

  constructor(private countryService: CountriesService) { }

    ngOnInit(): void {
      this.countryService.getEuropeanCountries().subscribe((data) => {
      this.europeancountries = data;
    });
  }
}
