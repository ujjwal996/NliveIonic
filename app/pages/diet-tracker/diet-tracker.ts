import {Page, NavController,Modal} from 'ionic-angular';
import {DietPlanService} from '../../providers/diet-plan-service/diet-plan-service';
import {UserData} from '../../providers/user-data/user-data';
import {DatePicker} from 'ionic-native';
import {AlternativesModal} from '../alternatives-modal/alternatives-modal';

@Page({
  templateUrl: 'build/pages/diet-tracker/diet-tracker.html',
  providers:[DietPlanService, UserData]
})
export class DietTrackerPage {
  todayDate:any
 type:string;

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

  constructor(public nav: NavController, public _dietplanservice:DietPlanService , public _userdataservice:UserData) {
  //  this.getdietData();

  }
  ngBeforeViewInit(){
    this.getDate();
  }

//  getdietData(){
//    this.getUserData();
  //  this._dietplanservice.generateDietPlan(this.type).subscribe((data)=>{
  //    this.days.push(data);// should call thi
  //  });
  //}

  showAlternatives(item){

    let alternativesModal = Modal.create(AlternativesModal,{altenativeFor:item});
    alternativesModal.onDismiss((data)=>{
      console.log(data);//essentially update meal items to show with the data provided
    })
    this.nav.present(alternativesModal);
  }

//  getUserData()
//  {
//    this._userdataservice.getpersonalInfo().then((data)=>{
//      let user = JSON.parse(data);
//      this.type = user.data.age;
//    });
  //}

  getDate(){
    DatePicker.show({
      date: new Date(),
      mode:'date'
    }).then((date)=>this.todayDate=date)
  }

  initNextData(){
    console.log('reinitialise all data to next day\'s meals');
  }
}
