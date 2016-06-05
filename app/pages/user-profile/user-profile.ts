import {Page, NavController, Events} from 'ionic-angular';
import {UserData} from '../../providers/user-data/user-data';
import {Preferences} from '../../components/preferences-user/preferences-user';
import {PersonalUser} from '../../components/personal-user/personal-user';

@Page({
  templateUrl: 'build/pages/user-profile/user-profile.html',
  directives:[Preferences, PersonalUser],
  providers : [UserData]
})
export class UserProfilePage {


  constructor( public _userdataservice : UserData, public events:Events ){
    this.events.subscribe('personalInfo:submited',(response)=>{
      console.log(response);
    });

  }




}
