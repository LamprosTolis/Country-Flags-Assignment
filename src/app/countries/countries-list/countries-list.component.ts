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
  countries: CountryDAO[];
  selectedCountry: any;


  constructor(private countryService: CountriesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {

      const countryDAOList = []
      
      data.forEach(country => {

        let language = ""
        if(country.languages!==undefined)
        Object.values(country.languages).forEach(l => {
          language += l + ", "
        })
        language = language.substring(0,language.length - 2)


        let natName = country.name.nativeName?.eng?.["official"]?.toString()??"N/A"//country.name.nativeName?.eng?
        if(natName.values === "")
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
        borders = borders.substring(0,borders.length - 2)
        if(borders === "")
        borders="N/A"


        let timezones = ""
        if(country.timezones!== undefined)
        for(let t in country.timezones)
        {
          timezones += country.timezones[t] + " , "
        }
        timezones = timezones.substring(0,timezones.length - 2)



        countryDAOList.push(new CountryDAO(
          country.tld?.[0]??"N/A",
          country.region,
          country.subregion,
          country.population,
          timezones,
          borders,
          natName,
          language,
          country.name.common,
          country.flags.png,
          country.capital?.toString()??"N/A"
        ))
      })
      this.countries = countryDAOList;
    });
  }



  onGetCountryInfo(country: string) {
    alert('Selected Country' + JSON.stringify(country));

    this.selectedCountry = (this.countryService.getCountryInfo(country));
    // alert('Selected Country: ' + JSON.stringify(this.selectedCountry));
    return this.selectedCountry;
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
