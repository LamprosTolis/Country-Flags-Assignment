import { CountriesService } from './../countries.service';
import { Country } from './../countries/country';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  closeResult: string;
  countries: Country[];
  europeancountries: Country[];
  selectedCountry: any;


  constructor(private countryService: CountriesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
    this.countries = data;
    });
  }

  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));
    debugger;
    console.log(country);

    this.selectedCountry = (this.countryService.getCountryInfo(country));

    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

  openLg(content) {
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }
}
