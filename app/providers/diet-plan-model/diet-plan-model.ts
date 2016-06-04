import {Injectable} from '@angular/core';

@Injectable()
export class DietPlanModel{
    ageCategory:string;
    days:{
      day : string,//Mon-Sunday
      meals:{
        number:number,//meal1,meal2 as given in datasheet
        type:string,//breakfast-dinner
        items:{
          name: string, //lemon water, wheat dalia etc.
          quanity: number,//1,2,3..
          alternatives:{
            name:string,
            quantity:number
          }
        }
      }
    }
  }
