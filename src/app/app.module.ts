import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { QuestionService } from './question.service';

import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

export const firebaseConfig = {
  apiKey: "AIzaSyA7x61YzPqHej1NSiVLwO_zxxIsln4XEyc",
  authDomain: "succywtf.firebaseapp.com",
  databaseURL: "https://succywtf.firebaseio.com",
  projectId: "succywtf",
  storageBucket: "succywtf.appspot.com",
  messagingSenderId: "436246418639",
  appId: "1:436246418639:web:16d2c18fe54490a50c93ba",
  measurementId: "G-9QY8TKMKC3"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    AuthService,
    QuestionService,
    { provide: FunctionsRegionToken, useValue: "us-central1" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
