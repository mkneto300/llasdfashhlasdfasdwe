import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { Observable } from 'rxjs';
import { Style } from '../models/style';
import { catchError } from 'rxjs/operators';
import { Material } from '../models/material';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  material:Material;
  materials:Material[];

  private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  constructor(private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient, private customErrorHandler: CustomErrorHandler) { }

    getMaterials(): Observable<Material[]> {
      return this.http.get<Material[]>(this.baseUrl + '/material', httpOptions)
      .pipe(catchError(this.customErrorHandler.handleError));
    }

}
