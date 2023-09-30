import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getAllMenuDishes(): Observable<any> {
    return this.http.get('assets/menuDush.json');
  }

  getAllDishes(): Observable<any> {
    return this.http.get('assets/dish.json');
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/order.json');
  }

  getAllPagamentos(): Observable<any> {
    return this.http.get('assets/pagamento.json');
  }
}
