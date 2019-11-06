import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {
  user: User;
  orders : Order[];

  constructor(private orderService: OrderService,
    private route : Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.orderService.getOrdersByUser(this.user).subscribe(
      response => {
        this.orders = response;
      }, error => {
        console.log('Soy un error');
      }
    );
  }



}
