import {Component} from '@angular/core';


@Component({
  selector: 'my-calendar',
  templateUrl: 'build/components/personal-calendar/personal-calendar.html'
})
export class PersonalCalendar {
//temp
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

  constructor() {

  }

  activateRegimeTracker(name){
    //this.nav.setRoot(RegimeTrackerPage);
    console.log("Display a Component which keeps track of user's regime");
  }
}
