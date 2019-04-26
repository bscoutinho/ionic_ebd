import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from "@ionic-native/local-notifications";
import { Calendar } from '@ionic-native/calendar';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBVi_TUb51FJHvzKn4wCtxN6YTeQgqypsI",
    authDomain: "ang-crud-b8fa3.firebaseapp.com",
    databaseURL: "https://ang-crud-b8fa3.firebaseio.com",
    projectId: "ang-crud-b8fa3",
    storageBucket: "ang-crud-b8fa3.appspot.com",
    messagingSenderId: "655338171132"
  }
};

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    //ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    LoginPage
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
