import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { HomePageComponent } from "./home-page/home-page.component";
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from "./contact/contact.component";


import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule                } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Contacts } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { SMS } from "@ionic-native/sms/ngx";



import { FormsModule } from "@angular/forms";

import { config } from './firebase';

@NgModule({
  declarations: [AppComponent, HomePageComponent, RegisterComponent, ContactComponent ],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(config), AngularFireAuthModule, AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    File,
    FilePath,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,
    CallNumber,
    SMS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
