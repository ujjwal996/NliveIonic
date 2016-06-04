import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {DietPlanModel} from '../diet-plan-model/diet-plan-model';


@Injectable()
export class DietPlanService {
  userdietPlan:DietPlanModel;


  constructor() {}

  generateDietPlan(age){
    this.userdietPlan.ageCategory = age;
    let data:any;//get data from dietplans for this category

    this.userdietPlan.days=data.days//getting data for all days and storing in Model format
    //with days object array with all days > each day having meals object array to store day wise meals
    // > each meal having items object array with items to display > each item having alternatives object array

    return this.userdietPlan;//convert the data call to a Promise if its an observable as we just need to
    //get the diet plan for user once
  }


}
