import {Page, NavController} from 'ionic-angular';
import {PersonalCalendar} from '../../components/personal-calendar/personal-calendar';
import {AllActivities} from '../../components/all-activities/all-activities';

@Page({
  templateUrl: 'build/pages/calendar/calendar.html',
  directives:[PersonalCalendar,AllActivities]
})
export class CalendarPage {



  constructor(public nav: NavController) {}



}
