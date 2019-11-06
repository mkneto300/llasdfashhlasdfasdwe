import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: Product[];
  product: Product;

  constructor( private productService: ProductService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if(typeof params.search !== 'string'){
        this.product=params.search;
        params.search=this.product.name;
      }
      this.productService.getProductsBySearch(params.search).subscribe(
        response => {
         this.products = response;
        }, error => {
        });
  });
}

}
