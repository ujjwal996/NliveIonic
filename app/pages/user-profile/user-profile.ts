import {Page, NavController} from 'ionic-angular';
import {FormBuilder, ControlGroup} from '@angular/common';
import {UserData} from '../../providers/user-data/user-data';

@Page({
  templateUrl: 'build/pages/user-profile/user-profile.html',
  providers : [UserData]
})
export class UserProfilePage {


  personalInfo:ControlGroup;
  preferencesInfo:ControlGroup;
  healthCheckbox:ControlGroup;
  fitnessCheckbox:ControlGroup;
  interestCheckbox:ControlGroup;

  constructor(public nav: NavController, public fb:FormBuilder, public _userdataservice:UserData) {
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

    this.preferencesInfo = fb.group({
      foodRadio : [''],
      fitnessCheckbox: fb.group({
        weightloss:[''],
        weightgain:[''],
        bodyBuilding:[''],
        muscleToning:[''],
        healthy:[''],
        rapidWeightloss:['']
      }),
      activitylevelRadio : [''],
      interestCheckbox: fb.group({
        yoga: [''],
        fitness : [''],
        healthRecipes : [''],
        healthyLiving : [''],
        dance: [''],
        abs: [''],
        core: [''],
        tips: [''],
        myths: [''],
        weightLoss: [''],
        dietRegimes: [''],
        cardio: [''],
        excercise: [''],
        new: [''],
        quotes: [''],
        funFacts: ['']
      })
    });
  }

  saveFormDetails(){
    this._userdataservice.setpersonalInfo(this.personalInfo.value);
  }

  submitpreferences(){
    this._userdataservice.setPreferences(this.preferencesInfo.value);
  }

  getit(){
  this._userdataservice.getPreferences().then((response)=>{
    console.log(response);
    console.log(JSON.parse(response));
  });
  this._userdataservice.getpersonalInfo().then((response)=>{
    console.log(JSON.parse(response));
  })
}

}
