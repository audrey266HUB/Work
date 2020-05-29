import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploisPage } from './emplois.page';

const routes: Routes = [
  {
    path: '',
    component: EmploisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploisPageRoutingModule {}
