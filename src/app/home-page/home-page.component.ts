import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import { auth } from 'firebase';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  dataUser = {
    email: '',
    password: ''
  };
  connected: boolean;

  constructor(
    public router: Router, public afAuth: AngularFireAuth
    ) {
      this.afAuth.authState.subscribe(auth =>{
        if(!auth) {
          console.log("vous n'etes pas connecté");
          this.connected = false;
        } else {
          console.log("vous etes connecté");
          this.connected = true;
        }
      });
    }

    login() {
      this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
      this.dataUser = {
        email: '',
        password: ''
      };
    }

    logout() {
      this.afAuth.signOut();
    }


  ngOnInit() {

  }


}
