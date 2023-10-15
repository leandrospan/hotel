import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesChefPage } from './detalhes-chef.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesChefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesChefPageRoutingModule {}
