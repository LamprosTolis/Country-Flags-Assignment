import { CountriesService } from './../countries/countries.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent implements OnInit {

  closeResult = '';
  selectedCountry: any;


  constructor(public modal: NgbActiveModal, private countryService: CountriesService) { }

  ngOnInit(): void {
  }

  onGetCountryInfo(country: string) {

    alert(JSON.stringify(country));
    this.selectedCountry = JSON.stringify(this.countryService.getCountryInfo(country));

    alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
  }

  open(content) {

  }


}
