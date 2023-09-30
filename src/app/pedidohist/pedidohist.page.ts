import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-pedidohist',
  templateUrl: './pedidohist.page.html',
  styleUrls: ['./pedidohist.page.scss'],
})
export class PedidohistPage implements OnInit {

  pagamentos : any = [];

  constructor(public loadingController: LoadingController, private service: AppServiceService) { }

  notificationsModal(ev: any){

  }

  presentModal(ev: any){

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Por favor aguarde ...",
    });
    await loading.present();
  }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllPagamentos().subscribe((res) => {
        this.pagamentos = res.document.records;
        console.log(this.pagamentos);
        this.loadingController.dismiss();
      });
    });
  }

}
