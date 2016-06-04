import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/calendar/calendar.html',
})
export class CalendarPage {
  todaytodo = 5;
  Todos =
    [{
      hide : false,
      time : "8.40",
      activities:[{
        name : "push-up",
        hide : false
    }]
  }
];


  constructor(public nav: NavController) {}

  activateRegimeTracker(name){
    console.log("Display a Component which keeps track of user's regime");
  }

}
