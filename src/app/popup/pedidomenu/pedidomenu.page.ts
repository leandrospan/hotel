import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pedidomenu',
  templateUrl: './pedidomenu.page.html',
  styleUrls: ['./pedidomenu.page.scss'],
})
export class PedidomenuPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  close(){
    this.popoverController.dismiss();
  }

}
