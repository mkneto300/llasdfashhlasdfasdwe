import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SubCategory } from '../models/subCategory';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  constructor(private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient, private customErrorHandler: CustomErrorHandler) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + '/category', httpOptions)
    .pipe(catchError(this.customErrorHandler.handleError));
  }

  getSubCategories() : Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.baseUrl + '/subCategory', httpOptions)
    .pipe(catchError(this.customErrorHandler.handleError));
  }
}
