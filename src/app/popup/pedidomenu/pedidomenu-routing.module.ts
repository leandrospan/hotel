import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidomenuPage } from './pedidomenu.page';

const routes: Routes = [
  {
    path: '',
    component: PedidomenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidomenuPageRoutingModule {}
