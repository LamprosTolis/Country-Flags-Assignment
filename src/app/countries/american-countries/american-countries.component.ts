import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from './../countries/country';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-american-countries',
  templateUrl: './american-countries.component.html',
  styleUrls: ['./american-countries.component.scss'],
})
export class AmericanCountriesComponent implements OnInit {
  americancountries: Country[];
  selectedCountry: any;
  constructor(private countryService: CountriesService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.countryService.getAmericanCountries().subscribe((data) => {
      this.americancountries = data;
    });
  }

  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));
    this.selectedCountry = this.countryService.getCountryInfo(country);

    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

  openLg(content) {
    this.modalService.open(content, {
      size: 'xl',
      centered: true,
      scrollable: true,
    });
  }
}
