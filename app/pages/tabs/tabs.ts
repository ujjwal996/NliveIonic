import {Page, NavParams} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {UserProfilePage} from '../user-profile/user-profile';
import {DietTrackerPage} from '../diet-tracker/diet-tracker';


@Page({
  template: `<ion-tabs [selectedIndex]="pageChosen">
    <ion-tab [root] = "personal" tabIcon="person" tabTitle="Personal"></ion-tab>
    <ion-tab [root] = "diettracker" tabIcon="heart" tabTitle="Track"></ion-tab>
    <ion-tab [root] = "reachout" tabIcon="people" tabTitle="Food Community"></ion-tab>
    <ion-tab [root] = "analytics" tabIcon="pulse" tabTitle="Up till now"></ion-tab>
  </ion-tabs>`

})

@Injectable()
export class DashboardTabs {

  personal:any=UserProfilePage;
  diettracker = DietTrackerPage;
  analytics:any ;// = DashboardAnalyticsPage;
  reachout:any ;// = DashboardFoodCommunityPage;
  pageChosen : number;

  constructor(public navParams : NavParams){}

}
