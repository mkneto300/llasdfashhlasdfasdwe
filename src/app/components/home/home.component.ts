import { ProductComponent } from './../product/product.component';
import { FunctionProvider } from 'src/app/helpers/FunctionProvider';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input, ViewChild, Output, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  allProducts: Product[];
  myControl = new FormControl();
  filteredOptions: Observable<Product[]>;
  categories: Category[];
  product: Product;
  categorySelected: Category;
  search: string;
  products: Product[];
  imageUpload: string;

  @ViewChild(ProductComponent,{ read: true, static: false }) productComponent;

  slideOptions: any[] =[
  {title:"Large title Call 01", desc:"Part of the content 01", buttonText:"Call to Action", url:"assets/images/slides/slide-01.jpg"},
  {title:"Large title Call 02", desc:"Part of the content 02", buttonText:"Call to Action", url:"assets/images/slides/slide-02.jpg"},
  {title:"Large title Call 03", desc:"Part of the content 03", buttonText:"Call to Action", url:"assets/images/slides/slide-03.jpg"},]

  constructor(private functionProvider: FunctionProvider, private router: Router,
    private productService: ProductService, private categoryService: CategoryService
    ) { }

    ngOnInit() {
      this.products= this.productService.getShareData();
    }
    onChanges(){
      this.products=this.productService.getShareData();

    }

    ngAfterViewInit(){

      this.initSlides();
    }


    initSlides(){

      $(function() {
        $(".rslides").responsiveSlides({
          auto: true,
          pager: false,
          nav: true,
          speed: 1500,
          namespace: "callbacks",
          before: function () {
            $('.events').append("<li>before event fired.</li>");
          },
          after: function () {
            $('.events').append("<li>after event fired.</li>");
          }

        });
      });


    }
}
