import {Component} from '@angular/core';
import {Events} from 'ionic-angular';
import {ControlGroup, FormBuilder} from '@angular/common';
import {UserData} from '../../providers/user-data/user-data';

@Component({
  selector: 'my-info',
  templateUrl: 'build/components/personal-user/personal-user.html'
})
export class PersonalUser {
  personalInfo:ControlGroup;
  healthCheckbox:ControlGroup;

  constructor( public fb:FormBuilder, public _userdataservice:UserData, public events:Events) {
    this.personalInfo = fb.group({
      name : [''],
      ageRadio:[''],
      ageRadioOther:[''],
      height:[''],
      weight:[''],
      healthCheckbox:fb.group({
        diabetes:[''],
        hypertension:[''],
        pregnancy:[''],
        postPregnancy:[''],
        cardioVascular:[''],
        cancer:[''],
        orthopedic:[''],
        healthCheckboxOther:[''],
        otherText:['']
      }),
      genderRadio:['']

    });


  }

  saveFormDetails(){
    this.events.publish('personalInfo:submited',this.personalInfo.value);
    this._userdataservice.setpersonalInfo(this.personalInfo.value);
  }

  showResults(){
    this._userdataservice.getpersonalInfo().then((res)=>{
      console.log(res);
    });
  }

  }
