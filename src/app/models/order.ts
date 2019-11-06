import { User } from './user';
import { Payment } from './payment';
import { LineItem } from './lineItem';

export class Order {
  id: number;
  date: Date;
  status: string;
  paymentOrder: Payment;
  user: User;
  lineItems: LineItem[];

}
