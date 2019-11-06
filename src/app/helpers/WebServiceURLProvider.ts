import { Injectable } from '@angular/core';




@Injectable({
    providedIn: 'root'
  })
export class WebServiceURLProvider {
      constructor( ) { }

getWebServicesURL(): string {
       return 'http://127.0.0.1:8080';
        //return  'https://salafood.herokuapp.com';
      }
}