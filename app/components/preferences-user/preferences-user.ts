import {Events } from 'ionic-angular';
import {Component} from '@angular/core';
import {ControlGroup, FormBuilder} from '@angular/common';
import {UserData} from '../../providers/user-data/user-data';

@Component({
  selector:'my-preferences',
  templateUrl: 'build/components/preferences-user/preferences-user.html'
})

export class Preferences{
  preferencesInfo:ControlGroup;
  fitnessCheckbox:ControlGroup;
  interestCheckbox:ControlGroup;

 constructor(public fb:FormBuilder, public events:Events, public _userdataservice:UserData){
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

 submitPreferences(){
   this.events.publish('preferences:submited', this.preferencesInfo.value);
   this._userdataservice.setPreferences(this.preferencesInfo.value);
 }

 showResults(){
   this._userdataservice.getPreferences().then((res)=>{
     console.log(JSON.parse(res));
   });
 }

}
