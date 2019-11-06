import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.css']
})
export class DiningComponent implements OnInit {

  product: Product;
  products: Product[];

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
}
