
import { FunctionProvider } from 'src/app/helpers/FunctionProvider';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
//import { CategoryButtonComponent } from '../../components/category-button/category-button.component';
//import * as $ from 'jquery';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  allProducts: Product[];
  myControl = new FormControl();
  filteredOptions: Observable<Product[]>;
  categories: Category[];
  product: Product;
  categorySelected: Category;
  search: string;
  user : User;
  @Input() products: Product[]=[];
  @Output() changes = new EventEmitter<boolean>();




  constructor(

    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(
  ) {
    this.product=new Product();

    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

       this.productService.getProducts().subscribe(
         response => {
          this.products = response;
          this.allProducts=response;
          this.productService.shareData(this.products);
          this.changes.emit();
         }, error => {
         }
       );

       this.categoryService.getCategories().subscribe(
        response => {
          this.categories = response;

        }, error => {
        }
      );

       this.filteredOptions = this.myControl.valueChanges
       .pipe(
         startWith(''),
         map(value => typeof value === 'string' ? value : value.name),
         map(name => name ? this._filter(name) : this.allProducts)
       );

    /*
        BUG: If the mouse enters the button again, it triggers the click event and the dropdown gets hidden.
        NEXT: Look for an alternative or fix.
     */
/*     $(".dropdown-toggle").mouseover(function(e){
          let ele = $(this);
          ele.trigger('click');
    }); */

  } // End of ngOnInit METHOD

  displayFn(product?: Product): string | undefined {
    return product ? product.name : undefined;
  }
  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();
    return this.allProducts.filter(product =>
      product.name.toLowerCase().includes(filterValue));
  }

  /*
  getProductsByCategory(idCategory: string){

    this.productService.getProductByCategory(idCategory).subscribe(
      response => {
        this.products = response;
        this.productService.shareData(this.products);
        this.changes.emit();

      }, error => {
      }
    );
  }
  */

 getProductsBySearch(search: string){

  if(typeof search !== 'string'){
    this.product=search;
    search=this.product.name;
  }
  this.search=search;
  this.router.navigate(['/search/'+this.search]);
  }

  //Ernesto Ardon Code

  showPopup(event) {

  }

}

