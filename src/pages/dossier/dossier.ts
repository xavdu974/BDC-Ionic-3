import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationPage } from '../navigation/navigation';

/**
 * Generated class for the DossierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dossier',
  templateUrl: 'dossier.html',
})
export class DossierPage {

  navigationPage = NavigationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DossierPage');
  }

}
