import { Image } from './../../models/image';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css']
})
export class LivingComponent implements OnInit {
  product: Product;
  products: Product[];
  images: Image[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    ) { }

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

}
