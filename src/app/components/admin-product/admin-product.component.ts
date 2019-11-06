import { Image } from './../../models/image';

import { MaterialService } from './../../services/material.service';
import { Component, OnInit, EventEmitter} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Style } from 'src/app/models/style';
import { Sett } from 'src/app/models/set';
import { Material } from 'src/app/models/material';
import { StyleService } from 'src/app/services/style.service';
import { SetService } from 'src/app/services/set.service';
import { Price } from 'src/app/models/price';
import { SubCategory } from '../../models/subCategory';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],

})

export class AdminProductComponent implements OnInit {

  products: Product[];
  product: Product;
  myControl = new FormControl();
  filteredOptions: Observable<Product[]>;
  showAddForm = "false";
  showUpdateForm= "false";
  user: User;
  categories: Category[];
  subCategories: SubCategory[];
  styles: Style[];
  sets: Sett[];
  categorySelected: Category;
  selectedFiles =[];
  newProduct: Product;
  colors:string[] = ['Red','Blue','Black'];
  material:Material;
  materials: Material[]=[];
  imagesList = new Array();
  imageUrls = [];
  price:Price;


  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private styleService: StyleService,
    private setService: SetService,
    private materialService: MaterialService,
    private alertService: AlertService
  ) { }
  ngOnInit() {

    this.product=new Product;
    this.newProduct= new Product;
    this.material =new Material;
    this.price= new Price;


    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }, error => {
      }
    );
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response;

      }, error => {
      }
    );

    this.categoryService.getSubCategories().subscribe(
      response => {
        this.subCategories = response;

      }, error => {
      }
    );

    this.styleService.getStyles().subscribe(
      response => {
        this.styles = response;

      }, error => {
      }
    );
    this.setService.getSets().subscribe(
      response => {
        this.sets = response;
      }, error => {
      }
    );

    this.materialService.getMaterials().subscribe(
      response => {
        this.materials = response;
      }, error => {
      }
    );


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.products)
      );

  }

  displayFn(product?: Product): string | undefined {
    return product ? product.name : undefined;
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(filterValue));
  }

  currentProduct(){
    this.product=this.myControl.value;
    return this.product;
   }

  updateProduct(){
    this.productService.updateProduct(this.product)
    .subscribe();
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product.id.toString())
    .subscribe();
  }

  addProduct(){


          for(let file of this.selectedFiles){
            this.productService.uploadImage(file ).subscribe();
          }

          for(let i = 0; i < this.selectedFiles.length; i++ ){
            let singleImage = new Image;
            singleImage.path= this.selectedFiles[i].name.toLowerCase().replace(/ /g, "");
          this.imagesList.push(singleImage);
          }
          this.newProduct.images=this.imagesList;
          this.imagesList=[];
          this.newProduct.price=this.price;
          this.productService.saveProduct(this.newProduct).subscribe(
            () => this.alertService.success('Product Added Succesfully', true),
            err => this.alertService.error('Error adding product', true)
          );
          location.reload();

   }

   showUpdateProductForm() {
    this.showUpdateForm = 'true';
    this.showAddForm = 'false';
  }

  showAddProductForm(){
    this.showAddForm = 'true';
    this.showUpdateForm = 'false';
  }

  updateMaterials(){

    this.materials.push(this.material);

  }

  onSelectFile(event) {
    this.selectedFiles=[];
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                   this.selectedFiles.push(event.target.files[i]);
                   var reader = new FileReader();

                   reader.onload = (event:any) => {
                      this.imageUrls.push(event.target.result);
                   }

                   reader.readAsDataURL(event.target.files[i]);
        }
    }
  }




}
