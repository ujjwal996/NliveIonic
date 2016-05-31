import {ViewChild} from '@angular/core'
import {App, Platform,MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {GoalsPage} from './pages/goals/goals';
import {ConnectPage} from './pages/connect/connect';
import {CalendarPage} from './pages/calendar/calendar';
import {DashboardTabs} from './pages/tabs/tabs';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardTabs;
  dashboard = DashboardTabs;
  goals = GoalsPage;
  connect = ConnectPage;
  calendar= CalendarPage;

  constructor(platform: Platform, public menu : MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page){
    this.menu.close()
    this.nav.setRoot(page);// importing nav component from @ViewChild
  }

}
