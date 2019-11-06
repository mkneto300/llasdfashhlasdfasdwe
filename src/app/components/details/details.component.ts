import { Image } from './../../models/image';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LineItemService } from 'src/app/services/line-item.service';
import { AlertService } from 'src/app/services/alert.service';





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product;
  images: Image[]=[];
  showPrice: number;
  pricesToShow: number[]= [];
  sizeNames:string[] = ['','',''];
  sizeSelected: string = 'default';
  productsSet: Product[];



  constructor(private route: ActivatedRoute, private productService: ProductService,
              private lineItemService: LineItemService,private alertService: AlertService) { }

  ngOnInit() {
      this.product=new Product;
      this.route.params.subscribe(params => {
      this.productService.getProduct(params.id).subscribe(
         product => {
          this.product = product;
          this.images = product.images;
          this.showPrice = this.product.price.standarPrice;

      this.productService.getProductBySet(product.set.id).subscribe(
            response => {
              this.productsSet = response;
            }, error => {
            }
      );

            if(product.price.smallPrice){
              this.sizeNames[0]='Queen';
            }if(product.price.mediumPrice){
              this.sizeNames[1]='Cal.King';
            }if(product.price.bigPrice){
              this.sizeNames[2]='E.King';
            }
         }
       );
      });
  }
  addToCart() {

    this.lineItemService.createLineItem(this.product, 1);
    this.alertService.success('Your product was successfully added to the cart', true)
    }

  updatePrice(){
   if (this.sizeSelected=='Queen') {
      this.showPrice = this.product.price.smallPrice;
      }if(this.sizeSelected=='Cal.King') {
        this.showPrice = this.product.price.mediumPrice;
      }if(this.sizeSelected=='E.King') {
        this.showPrice = this.product.price.bigPrice;
      }

  }


}
