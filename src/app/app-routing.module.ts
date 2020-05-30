import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MapComponent} from './map/map.component';
import { ContactComponent } from "./contact/contact.component";


import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  
  {path : '' ,    component : HomePageComponent},
  {path : 'register' ,    component : RegisterComponent},
  {path : 'map',    component : MapComponent},
  {path : 'contact',    component : ContactComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
