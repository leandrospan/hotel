import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Perfil1Component } from '../perfil1/perfil1.component';
import { MenuperfilComponent } from '../menuperfil/menuperfil.component';

@Component({
  selector: 'app-search-chef',
  templateUrl: './search-chef.page.html',
  styleUrls: ['./search-chef.page.scss'],
})
export class SearchChefPage implements OnInit {

  data = [
    {
      "image_id": "01",
      "image": "001.jpg"
    },
    {
      "image_id": "02",
      "image": "002.jpg"
    },
    {
      "image_id": "03",
      "image": "003.jpg"
    },
    {
      "image_id": "04",
      "image": "001.jpg"
    },
    {
      "image_id": "05",
      "image": "002.jpg"
    },
    {
      "image_id": "06",
      "image": "003.jpg"
    },
    {
      "image_id": "07",
      "image": "001.jpg"
    },
    {
      "image_id": "08",
      "image": "002.jpg"
    }
  ];

  constructor(private modalCtrl: ModalController, private popoverControl: PopoverController) { }

  public notificationModal(ev: any){

  }

  async presentModal(ev :any){
    const modal = await this.modalCtrl.create({
      component: Perfil1Component,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      backdropBreakpoint: 0,
      breakpoints: [0, 1],
      handle: false,
      keyboardClose: true,
      canDismiss: true,
      componentProps: {
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass: "my-modal"
    });
    return await modal.present();
  }

  async presentPopover(ev: any){
    const popover = await this.popoverControl.create({
      component: MenuperfilComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
  }

  ngOnInit() {
  }

}
