import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {HomePageComponent} from "./home-page/home-page.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule                } from '@angular/fire';
import {AngularFireAuthModule} from "@angular/fire/auth";

import { config } from './firebase';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  
  
  ],
  entryComponents: [],
  imports: [
  BrowserModule, 
  IonicModule.forRoot(),
  AngularFireModule.initializeApp(config),
  AngularFireAuthModule,
  AppRoutingModule
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
