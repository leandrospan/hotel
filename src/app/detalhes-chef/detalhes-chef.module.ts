import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesChefPageRoutingModule } from './detalhes-chef-routing.module';

import { DetalhesChefPage } from './detalhes-chef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesChefPageRoutingModule
  ],
  declarations: [DetalhesChefPage]
})
export class DetalhesChefPageModule {}
