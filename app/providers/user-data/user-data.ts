import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage,SqlStorage} from 'ionic-angular';


@Injectable()
export class UserData {
  userPersonal: Storage;

  constructor() {
    this.userPersonal = new Storage(SqlStorage,{name:'userPersonal'});
  }

   setpersonalInfo(personalinfo){
     let stringifiedInfo = JSON.stringify(personalinfo);
     this.userPersonal.set('personalInfo',stringifiedInfo);
   }

   setPreferences(preferences){
     let stringifiedPreferences = JSON.stringify(preferences);
     this.userPersonal.set('preferences',stringifiedPreferences);
   }

   getpersonalInfo():Promise<any>{
     return(this.userPersonal.get('personalInfo'));
   }

   getPreferences():Promise<any>{
     return(this.userPersonal.get('preferences'));
   }

}
