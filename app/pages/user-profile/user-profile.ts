import {Page, NavController} from 'ionic-angular';
import {FormBuilder, ControlGroup} from '@angular/common';


@Page({
  templateUrl: 'build/pages/user-profile/user-profile.html',
})
export class UserProfilePage {


  personalInfo:ControlGroup;
  preferencesInfo:ControlGroup;
  healthCheckbox:ControlGroup;
  fitnessCheckbox:ControlGroup;
  interestCheckbox:ControlGroup;

  constructor(public nav: NavController, public fb:FormBuilder) {
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
    console.log(this.personalInfo.value);
  }

  submitpreferences(){
    console.log(this.preferencesInfo.value);
  }
}
