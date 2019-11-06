import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() products: Product[];


  constructor(private productService: ProductService, private router: Router) { }


  imageUpload: string;

  ngOnInit() {




  }
showImage(imgName: string){

}



}
