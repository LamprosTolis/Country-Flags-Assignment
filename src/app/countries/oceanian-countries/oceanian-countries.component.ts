import { Country } from './../countries/country';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oceanian-countries',
  templateUrl: './oceanian-countries.component.html',
  styleUrls: ['./oceanian-countries.component.scss']
})
export class OceanianCountriesComponent implements OnInit {

  constructor(private countryService: CountriesService) { }

  oceaniancountries: Country[];

  ngOnInit(): void {
    this.countryService.getOceaniaCountries().subscribe((data) => {
    this.oceaniancountries = data;
  });
 }
}
