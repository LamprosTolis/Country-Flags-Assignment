import { Country } from './../countries/country';
import { ModalPopupComponent } from './../../modal-popup/modal-popup.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CountriesService } from '../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-european-countries',
  templateUrl: './european-countries.component.html',
  styleUrls: ['./european-countries.component.scss']
})
export class EuropeanCountriesComponent implements OnInit {

  closeResult = '';
  europeancountries: Country[];
  selectedCountry: any;

  constructor(private countryService: CountriesService, private modalService: NgbModal) { }

    ngOnInit(): void {
      this.countryService.getEuropeanCountries().subscribe((data) => {
      this.europeancountries = data;
    });
  }

  onGetCountryInfo(country: string) {

    alert(JSON.stringify(country));
    this.selectedCountry = JSON.stringify(this.countryService.getCountryInfo(country));

    alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

  open(country: Country) {
   this.modalService.open(ModalPopupComponent);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 }
