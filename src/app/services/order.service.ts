import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { User } from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  items = [];
  private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  constructor(private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient, private errorHandler: CustomErrorHandler) { }
    addToCart(product) {
    this.items.push(product);
  }

  saveOrder(order: Order): Observable<any>{
    return this.http.post<any>(this.baseUrl + '/order',order, httpOptions)
    .pipe(catchError(this.errorHandler.handleError));

  }
  getOrdersByUser(user: User): Observable<Order[]> {
    return this.http.post<Order[]>(this.baseUrl + '/order/getOrdersByUser',user,httpOptions)
    .pipe(catchError(this.errorHandler.handleError));
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
