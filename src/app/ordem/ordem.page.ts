import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { CoupanComponent } from '../coupan/coupan.component';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit {

  orders : any = [];
  total_amt : number = 0;
  totalItemPrice : string = '';

  constructor(private service: AppServiceService, public loadingController: LoadingController, private modalController: ModalController) { }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "Por favor aguarde...",
    });
    await loading.present();
  }

  public deleteItem(i : number){
    this.orders = this.orders.filter((item: { id: number; }) => item.id !== i);
  }

  public remove(i : number){
    console.log(i);
    if(this.orders[i].qty > 1){
      console.log(this.orders[i].qty);
      this.orders[i].qty = this.orders[i].qty - 1;
      this.total_amt = this.total_amt - this.orders[i].amount;
      this.removeItemPrice(this.orders[i].qty, this.orders[i].amount, this.orders[i].title);
    }else{
      this.orders[i].qty = 1;
    }
  }

  public removeItemPrice(qty : number, amt : number, title : string){
    console.log(qty, amt, title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);
  }

  public add(i : number){
    console.log(i);
    console.log(this.orders[i].qty);
    this.orders[i].qty = this.orders[i].qty + 1;
    this.total_amt = this.total_amt + this.orders[i].amount;
    this.itemPrice(this.orders[i].qty, this.orders[i].amount, this.orders[i].title);
  }

  public itemPrice(qty : number, amt : number, title : string){
    console.log(qty, amt, title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);
  }

  public total(){
    for(let i = 0; i < this.orders.length; i++){
      this.total_amt = this.total_amt + this.orders[i].amount;
    }
  }

  public moreItens(){

  }

  public async editCoupan(ev : any){
    const modal = await this.modalController.create({
      component: CoupanComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      //swipeToClose: true,
      keyboardClose: true,
      componentProps: {
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass: "my-modal"
    });
    return await modal.present();
  }

  public orderDetails(){

  }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllSuasOrdens().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
        this.total();
      });
    });
  }

}
