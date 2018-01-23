import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FonctionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fonction',
  templateUrl: 'fonction.html',
})
export class FonctionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public maVar : string;

  fHello(){
    console.log("Hello World");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FonctionPage');
    this.maVar = "Parler";
    console.log("Je sais " + this.maVar + " :\)");
  }

}
