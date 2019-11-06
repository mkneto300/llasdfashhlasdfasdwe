import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

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
