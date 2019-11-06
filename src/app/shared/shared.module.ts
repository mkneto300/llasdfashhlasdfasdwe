import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuComponent } from '../shared/nav-menu/nav-menu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../components/angular-material/angular-material.module';
import {  RouterModule,  } from '@angular/router';
import { CategoryBodyComponent } from './category-body/category-body.component';
import { CategoryHeaderComponent } from './category-header/category-header.component';


@NgModule({
  declarations: [
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CategoryBodyComponent,
    CategoryHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent]
})
export class SharedModule { }
