import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
        for(let b in country.borders)
        {
          borders += country.borders[b] + ", "
        }
        if(borders!=="")
        borders = borders.substring(0,borders.length - 2)


        let timezones = ""
        if(country.timezones!== undefined)
        for(let t in country.timezones)
        {
          timezones += country.timezones[t] + " , "
        }
        timezones = timezones.substring(0,timezones.length - 2)

        // let timezones = ""
        // data.forEach(country => {

        //   Object.values(country.timezones).forEach(t => {
        //     timezones += t + ", "
        //   })
        //   timezones = timezones.substring(timezones.length -2)

        // })


        countryDAOList.push(new CountryDAO(

          country.tld?.[0]??"N/A",
          country.region,
          country.subregion,
          country.population,
          timezones,
          borders??"N/A",
          natName,
          language,
          country.name.common,
          country.flags.png,
          country.capital?.toString()??"N/A"
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