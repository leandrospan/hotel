import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.scss'],
})
export class Perfil1Component  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public dismiss() {
    this.modalCtrl.dismiss({
      "name": "Laxmi",
      "city": "Degloor"
    });
  }

}
