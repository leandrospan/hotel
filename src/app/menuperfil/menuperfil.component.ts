import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menuperfil',
  templateUrl: './menuperfil.component.html',
  styleUrls: ['./menuperfil.component.scss'],
})
export class MenuperfilComponent  implements OnInit {

  constructor(private popoverControl: PopoverController) { }

  ngOnInit() {}

  public close(){
    this.popoverControl.dismiss();
  }

}
