import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from './../countries/country';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oceanian-countries',
  templateUrl: './oceanian-countries.component.html',
  styleUrls: ['./oceanian-countries.component.scss'],
})
export class OceanianCountriesComponent implements OnInit {
  constructor(
    private countryService: CountriesService,
    private modalService: NgbModal
  ) {}

  oceaniancountries: Country[];

  ngOnInit(): void {
    this.countryService.getOceaniaCountries().subscribe((data) => {
      this.oceaniancountries = data;
    });
  }

  openLg(content) {
    this.modalService.open(content, {
      size: 'xl',
      centered: true,
      scrollable: true,
    });
  }
}
