import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetPage } from '../projet/projet';
import { DossierPage } from '../dossier/dossier';
import { LienPage } from '../lien/lien';
import { TestPage } from '../test/test';

/**
 * Generated class for the DemarragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demarrage',
  templateUrl: 'demarrage.html',
})
export class DemarragePage {

  projetPage = ProjetPage;
  dossierPage = DossierPage;
  lienPage = LienPage;
  testPage = TestPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemarragePage');
  }

}
