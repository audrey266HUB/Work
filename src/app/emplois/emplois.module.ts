import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploisPageRoutingModule } from './emplois-routing.module';

import { EmploisPage } from './emplois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploisPageRoutingModule
  ],
  declarations: [EmploisPage]
})
export class EmploisPageModule {}
