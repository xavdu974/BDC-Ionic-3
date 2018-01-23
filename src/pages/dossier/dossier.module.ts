import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DossierPage } from './dossier';

@NgModule({
  declarations: [
    DossierPage,
  ],
  imports: [
    IonicPageModule.forChild(DossierPage),
  ],
})
export class DossierPageModule {}
