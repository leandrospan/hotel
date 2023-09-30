import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PedidoPage } from '../popup/pedido/pedido.page';
import { PedidomenuPage } from '../popup/pedidomenu/pedidomenu.page';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  pedidos = [{
    "data": "Hoje, 23 Ago 1980",
    "pedido": [{
      "codigo": "01",
      "imagem": "001.jpg",
      "titulo": "Hamburguer",
      "preco": "55.40",
      "transCod": "58745212",
      "tempo": "20min",
      "status": "CONFIRMADO"
    },
    {
      "codigo": "02",
      "imagem": "002.jpg",
      "titulo": "Brotinho",
      "preco": "48.50",
      "transCod": "45784125",
      "tempo": "45 min",
      "status": "CANCELADO"
    },
    {
      "codigo": "03",
      "imagem": "003.jpg",
      "titulo": "Porção de Bacon",
      "preco": "23.08",
      "transCod": "23081980",
      "tempo": "10 min",
      "status": "CONFIRMADO"
    }
    ]
  },
  {
    "data": "01 Jul 1982",
    "pedido": [{
      "codigo": "04",
      "imagem": "001.jpg",
      "titulo": "Hamburguer",
      "preco": "55.40",
      "transCod": "58745212",
      "tempo": "23 min",
      "status": "CONFIRMADO"
    },
    {
      "codigo": "05",
      "imagem": "002.jpg",
      "titulo": "Brotinho",
      "preco": "48.50",
      "transCod": "45784125",
      "tempo": "30 min",
      "status": "CANCELADO"
    },
    {
      "codigo": "06",
      "imagem": "003.jpg",
      "titulo": "Porção de Bacon",
      "preco": "23.08",
      "transCod": "23081980",
      "tempo": "05 min",
      "status": "CONFIRMADO"
    }
    ]
  },
  {
    "data": "30 Dez 1993",
    "pedido": [{
      "codigo": "07",
      "imagem": "001.jpg",
      "titulo": "Hamburguer",
      "preco": "55.40",
      "transCod": "58745212",
      "tempo": "26 min",
      "status": "CONFIRMADO"
    },
    {
      "codigo": "08",
      "imagem": "002.jpg",
      "titulo": "Brotinho",
      "preco": "48.50",
      "transCod": "45784125",
      "tempo": "1 hora",
      "status": "CANCELADO"
    },
    {
      "codigo": "09",
      "imagem": "003.jpg",
      "titulo": "Porção de Bacon",
      "preco": "23.08",
      "transCod": "23081980",
      "tempo": "10 min",
      "status": "CANCELADO"
    }
    ]
  }];

  constructor(public popoverController: PopoverController) { }

  segmentChange(ev : any){
    console.log(ev.detail.value);
  }

  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PedidomenuPage,
      event: ev,
      translucent: true
    });
    await popover.present();
  }

  ngOnInit() {
  }

}
