import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/diet-tracker/diet-tracker.html',
})
export class DietTrackerPage {


  days = [{
    date:'18th November',
    meals :[{
      time : "breakfast",
      items : [{
        name : "milk",
        quantity: "1 cup",
        alternatives : "curd",
        checked : true
      },
      {
        name : "dosa",
        quantity : "1 piece",
        alternatives : "idli",
        checked : false
      }]
    },
      {
        time : "lunch",
        items : [{
          name : "apple",
          quantity: "2 piece",
          alternatives : "should be an array",
          checked : true
        },
        {
          name : "dosa",
          quantity : "1 piece",
          alternatives : "idli",
          checked : false
        }]
    }],
  }];

  constructor(public nav: NavController) {}


  showAlternatives(){
    console.log("present action sheet and update tracker with user's change")
  }


}
