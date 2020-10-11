import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private countryService: CountriesService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.countryService.getEuropeanCountries().subscribe((data) => {
      this.europeancountries = data;
    });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }
}
