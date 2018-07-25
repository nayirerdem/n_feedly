import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDIw-KwKCeo0PBIvxEnvFOayeh_xpnrj9U",
  authDomain: "feedlyapp-9e5a6.firebaseapp.com",
  databaseURL: "https://feedlyapp-9e5a6.firebaseio.com",
  projectId: "feedlyapp-9e5a6",
  storageBucket: "feedlyapp-9e5a6.appspot.com",
  messagingSenderId: "832153987957"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {} 
