import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  payment: Payment;
  ngOnInit() {
    this.payment = new Payment();
  }

  getPayment() {
    return this.payment;
  }
  updateTotal(total: number) {
    this.payment.amount += total;
  }
}
