import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import { LineItem } from '../models/lineItem';

@Injectable({
  providedIn: 'root'
})
export class LineItemService {
  lineItem: LineItem;
  lineItems = [];
  constructor() { }


  createLineItem(product: Product, quantity: number) {
    this.lineItem = new LineItem();
    this.lineItem.product = product;
    this.lineItem.quantity = quantity;
    this.lineItem.subTotal = product.price.standarPrice * quantity;
    if (localStorage.getItem('lineItems')) {
      this.lineItems = JSON.parse(localStorage.getItem('lineItems'));
    }
    let addNewLineItem = true;
    const temporalLineItems = [];
    for (let lineItem of this.lineItems) {
      if (lineItem.product.code === this.lineItem.product.code) {
        lineItem.quantity += this.lineItem.quantity;
        lineItem.subTotal += this.lineItem.subTotal;
        addNewLineItem = false;
      }
      temporalLineItems.push(lineItem);

  }
    if (addNewLineItem) {temporalLineItems.push(this.lineItem); }
    this.lineItems = temporalLineItems;
    localStorage.setItem('lineItems', JSON.stringify(this.lineItems));
  }
  getLineItems() {
    this.lineItems = [];
    if (localStorage.getItem('lineItems'))  {this.lineItems = JSON.parse(localStorage.getItem('lineItems')); }

    return this.lineItems;
  }
  deleteLineItem(code: number) {
    this.lineItems = JSON.parse(localStorage.getItem('lineItems'));
    let temporalLineItems = [];
    for (let lineItem of this.lineItems) {
      if (lineItem.product.code !== code) {
        temporalLineItems.push(lineItem);
      }
  }
    this.lineItems = temporalLineItems;
    if (localStorage.getItem('lineItems')) { localStorage.removeItem('lineItems'); }
    localStorage.setItem('lineItems', JSON.stringify(this.lineItems));

  }
  updaLineItems(lineItems: LineItem[]) {
    if (localStorage.getItem('lineItems')) { localStorage.removeItem('lineItems'); }
    localStorage.setItem('lineItems', JSON.stringify(lineItems));
  }

}
