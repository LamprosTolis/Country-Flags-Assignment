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
  europeancountries: CountryDAO[];
  selectedCountry: any;

  constructor(private countryService: CountriesService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.countryService.getEuropeanCountries().subscribe((data) => {

      const countryDAOList = []
      data.forEach(country => {
        let language = ""
        Object.values(country.languages).forEach(l => {
          language += l + ", "
        })
        language = language.substring(0,language.length - 2)

        let natName = country.name.nativeName.eng?.["official"]?.toString()??""
        if(natName === "")
        Object.values(country.name.nativeName).forEach(n => {
          if(n)
          natName = Object.values(n)[0]
        })

        let borders = ""
        if(country.borders!== undefined)
        borders = country.borders.toString()

        countryDAOList.push(new CountryDAO(
          // country.topLevelDomain
          country.tld?.[0]??"N/A",
          country.region,
          country.subregion,
          country.population,
          country.timezones.toString(),
          borders,
          natName,
          language,
          country.name.common,
          country.flags.png,
          country.capital.toString()
        ))
      })
      this.europeancountries = countryDAOList;
    });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
  }
}


export class CountryDAO{
  constructor (
  readonly topLevelDomain: string,
  readonly region: string,
  readonly subregion: string,
  readonly population: number,
  readonly timezones: string,
  readonly borders: string,
  readonly nativeName: string,
  readonly languages: string,
  readonly name: string,
  readonly flag: string,
  readonly capital: string
  ) {

  }


 



}