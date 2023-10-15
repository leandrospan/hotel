import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-detalhes-chef',
  templateUrl: './detalhes-chef.page.html',
  styleUrls: ['./detalhes-chef.page.scss'],
})
export class DetalhesChefPage implements OnInit {

  user: any = [];
  segId = "reviews";
  dish: any = [];
  orders: any = [];

  constructor(public loadingController:LoadingController, private service:AppServiceService) { }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "Por favor aguarde...",
    });
    await loading.present();
  }

  segmentChanged(ev:any){
    this.segId = ev.detail.value;
  }

  goToEvent(){

  }

  presentPopover(ev : any){

  }

  presentActionSheet(){

  }


  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res) => {
        this.user = res.document.records;
        console.log(this.user);
        this.loadingController.dismiss();
      });

      this.service.getAllDishes().subscribe((res) => {
        this.dish = res.document.records;
        console.log(this.dish);
      });

      this.service.getAllOrders().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
      });
    });
  }

}
