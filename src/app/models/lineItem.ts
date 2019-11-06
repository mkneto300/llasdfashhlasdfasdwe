import { Product } from 'src/app/models/product';
import { Order } from './order';

export class LineItem {
  id: number;
  product: Product;
  quantity: number;
  subTotal: number;

  constructor() {

  }
}
