import {Page, MenuController, NavController} from 'ionic-angular';
import {GoalsPage} from '../goals/goals';

@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  constructor(public menu:MenuController, public nav:NavController) {
    this.menu.enable(false);
  }

  login()
  {
    this.menu.enable(true);
    this.nav.setRoot(GoalsPage);//Dashboard pages are not getting resolved

  }

}
