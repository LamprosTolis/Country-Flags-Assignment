import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-form',
  templateUrl: './nav-form.component.html',
  styleUrls: ['./nav-form.component.scss']
})
export class NavFormComponent implements OnInit {
  form: FormGroup;
  programmingLanguages = ['TS', 'JS', 'C#'];



  constructor() { }




  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, Validators.required),
      angular: new FormControl(null, Validators.required),
      favouriteLanguage: new FormControl(null, Validators.required),
      isExperienced: new FormControl(null, Validators.required),
      jsversion: new FormControl(null, Validators.required),
    });

    this.form.get('favouriteLanguage').valueChanges.subscribe(value => {

      const jsVersionFormControl = this.form.get('jsversion');

      if (value === 'JS') {
        jsVersionFormControl.setValidators(Validators.required);
      } else {
        jsVersionFormControl.clearValidators();
      }
      jsVersionFormControl.updateValueAndValidity();
  });
 }  
 onSubmit() {
  console.log(this.form.value);
 }
}
