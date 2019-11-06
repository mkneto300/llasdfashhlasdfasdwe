import { UserService } from './../../services/user.service';
import { OrderService } from './../../services/order.service';
import { LineItemService } from './../../services/line-item.service';
import { Payment } from './../../models/payment';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Order } from 'src/app/models/order';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( private lineItemService: LineItemService,
    private orderService: OrderService,
    private route:Router,
    private alertService: AlertService) { }
  order = new Order();
  userExist = false;
  user: User;
  orders: Order[];


  ngOnInit() {
    this.updateOrder();
    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  setTotal() {
      this.order.paymentOrder = new Payment();
      this.order.paymentOrder.amount = 0;
      this.order.paymentOrder.type = 'Efectivo';
      this.order.lineItems.forEach(lineItem => {
        this.order.paymentOrder.amount += lineItem.subTotal;
      });
    }

  deleteLineItem(code: number) {
   this.lineItemService.deleteLineItem(code);
   this.updateOrder();
  }
  updateOrder() {
    this.order.lineItems = this.lineItemService.getLineItems();
    if( this.order.lineItems.length == 0 ) {
      this.route.navigate(['/home']);
    }else {
      this.setTotal();
    }
  }
  quantityChange() {
    let temporalLineItem = [];
    for (let lineItem of this.order.lineItems) {
      lineItem.subTotal = lineItem.product.price.standarPrice * lineItem.quantity;
      temporalLineItem.push(lineItem);
    }
    this.lineItemService.updaLineItems(temporalLineItem);
    this.updateOrder();
  }
  saveOrder(){
    this.order.status = 'Created';
    this.order.user = this.user;
    this.orderService.saveOrder(this.order)
    .subscribe(
      () => this.alertService.success('Product Added Succesfully', true),
      err => this.alertService.error('Error adding product', true)
    );

  }


  }





