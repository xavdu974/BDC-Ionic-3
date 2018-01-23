import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjetPage } from '../pages/projet/projet';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LienPage } from '../pages/lien/lien';
import { DossierPage } from '../pages/dossier/dossier';
import { NavigationPage } from '../pages/navigation/navigation';
import { TestPage } from '../pages/test/test';
import { SlidePage } from '../pages/slide/slide';
import { FonctionPage } from '../pages/fonction/fonction';
import { DemarragePage } from '../pages/demarrage/demarrage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjetPage,
    LienPage,
    DossierPage,
    NavigationPage,
    TestPage,
    SlidePage,
    FonctionPage,
    DemarragePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjetPage,
    LienPage,
    DossierPage,
    NavigationPage,
    TestPage,
    SlidePage,
    FonctionPage,
    DemarragePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
