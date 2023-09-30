import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidomenuPageRoutingModule } from './pedidomenu-routing.module';

import { PedidomenuPage } from './pedidomenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidomenuPageRoutingModule
  ],
  declarations: [PedidomenuPage]
})
export class PedidomenuPageModule {}
