import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {
  product: Product;
  products: Product[];
  sortType:string;

  sideFilterOption:string;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {


    this.route.params.subscribe(params => {
        this.productService.getProductByCategory(params.id).subscribe(
          response => {
            this.products = response;
            this.productService.shareData(this.products);
          }, error => {
          }
        );
     });
  }

  sideFilter($event){
    this.sideFilterOption = $event;

    console.log($event);
  }

  sortProducts(){
    if(this.sortType == '2'){
      this.products=this.products.sort((a,b) => (a.price.standarPrice < b.price.standarPrice)?1:-1);
    }if(this.sortType == '3'){
      this.products=this.products.sort((a,b) => (a.price.standarPrice > b.price.standarPrice)?1:-1);
    }

  }



}
