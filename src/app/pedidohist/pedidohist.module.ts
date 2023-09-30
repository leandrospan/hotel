import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidohistPageRoutingModule } from './pedidohist-routing.module';

import { PedidohistPage } from './pedidohist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidohistPageRoutingModule
  ],
  declarations: [PedidohistPage]
})
export class PedidohistPageModule {}
