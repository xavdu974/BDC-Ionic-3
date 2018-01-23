import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LienPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lien',
  templateUrl: 'lien.html',
})
export class LienPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    homePage = HomePage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LienPage');
  }

}
