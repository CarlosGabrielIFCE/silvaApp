import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { DetailPage } from '../pages/detail/detail';
import { HttpClientModule } from '@angular/common/http';
import { CreateRegisterPage } from '../pages/create-register/create-register';
import { ContasPage } from '../pages/contas/contas';
import { DiversosPage } from '../pages/diversos/diversos';
import { ModalFaturaPage } from '../pages/modal-fatura/modal-fatura';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    CreateRegisterPage,
    ContasPage,
    DiversosPage,
    ModalFaturaPage,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    CreateRegisterPage,
    ContasPage,
    DiversosPage,
    ModalFaturaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
  ]
})
export class AppModule {}
