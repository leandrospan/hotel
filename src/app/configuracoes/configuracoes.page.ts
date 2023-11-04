import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  setting: any = {
    appSettings: true,
    sms: true,
    offer: true,
    reminder: '',
    touchId: true,
    faceId: true,
  };

  constructor() { }

  public changeApp(ev: any){
    this.setting.appSettings = ev.detail.checked;
    console.log(this.setting);
  }

  public changeSms(ev: any){
    this.setting.sms = ev.detail.checked;
    console.log(this.setting);
  }

  public changeOffer(ev: any){
    this.setting.offer = ev.detail.checked;
    console.log(this.setting);
  }

  public changeReminder(ev: any){
    this.setting.reminder = ev.detail.checked;
    console.log(this.setting);
  }

  public changeTouchId(ev: any){
    this.setting.touchId = ev.detail.checked;
    console.log(this.setting);
  }

  public changeFaceId(ev: any){
    this.setting.faceId = ev.detail.checked;
    console.log(this.setting);
  }

  ngOnInit() {
  }

}
