import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetPage } from './projet';

@NgModule({
  declarations: [
    ProjetPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetPage),
  ],
})
export class ProjetPageModule {}
