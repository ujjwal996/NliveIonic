import {Page, NavParams} from 'ionic-angular';
import {Injectable} from '@angular/core';

import {DietTrackerPage} from '../diet-tracker/diet-tracker';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard-tabs/tabs.html'
})

@Injectable()
export class DashboardTabs {

  personal:any // = DashboardProfilePage;
  diettracker = DietTrackerPage;
  analytics:any // = DashboardAnalyticsPage;
  reachout:any // = DashboardFoodCommunityPage;
  pageChosen : number;

  constructor(public navParams : NavParams){}

}
