import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AlertComponent } from '../components/alert/alert.component';
import { ProductComponent } from '../components/product/product.component';
import { DetailsComponent } from '../components/details/details.component';
import { OrderComponent } from '../components/order/order.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { ActiveAccountComponent } from '../components/active-account/active-account.component';
import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
import { CreatePasswordComponent } from '../components/create-password/create-password.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ShowOrderComponent } from '../components/show-order/show-order.component';
import { AdminProductComponent } from '../components/admin-product/admin-product.component';
import { MainComponent } from '../components/main/main.component'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../components/angular-material/angular-material.module';
import { NgxPaginationModule} from 'ngx-pagination';
import {  RouterModule,  } from '@angular/router';

import { BedroomComponent } from './bedroom/bedroom.component';
import { LivingComponent } from './living/living.component';
import { DiningComponent } from './dining/dining.component';
import { PatioComponent } from './patio/patio.component';
import { OfficeComponent } from './office/office.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { CategoryButtonComponent } from './category-button/category-button.component';

import { ProductAtributesComponent } from './product-atributes/product-atributes.component';
import { SearchComponent } from './search/search.component';
import { OrderProductsComponent } from './order-products/order-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ProductComponent,
    DetailsComponent,
    OrderComponent,
    PaymentComponent,
    ActiveAccountComponent,
    ForgetPasswordComponent,
    CreatePasswordComponent,
    ProfileComponent,
    ShowOrderComponent,
    AdminProductComponent,
    MainComponent,

    BedroomComponent,
    LivingComponent,
    DiningComponent,
    PatioComponent,
    OfficeComponent,
    OutdoorsComponent,
    ProductAtributesComponent,
    CategoryButtonComponent,
    SearchComponent,
    OrderProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularMaterialModule,

  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ProductComponent,
    DetailsComponent,
    OrderComponent,
    PaymentComponent,
    ActiveAccountComponent,
    ForgetPasswordComponent,
    CreatePasswordComponent,
    ProfileComponent,
    ShowOrderComponent,
    AdminProductComponent,
    MainComponent
  ]
})
export class ComponentsModule { }
