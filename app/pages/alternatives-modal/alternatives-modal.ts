import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Page({
  template: `
  <ion-content>
    <ion-card>
      <ion-card-header> Alternatives for chosen meal </ion-card-header>
      <ion-card-content>
        <h2>meal.name</h2>
        <p> meal.properties </p>
        <button (click)="ChangeWithAlternatives()"> Change with this </button>
      </ion-card-content>
    </ion-card>
  </ion-content>

              `
})

@Injectable()
export class AlternativesModal{

  alternativesFor: string;
  constructor(public nav: NavController, public params:NavParams, public viewCtrl:ViewController) {
    this.alternativesFor = params.get('alternativesFor');
  }

  ChangeWithAlternatives(){
    let data = {name:'poha',quantity:'10 spoons'};
    this.viewCtrl.dismiss(data);
  }


}
