import { WebServiceURLProvider } from './../helpers/WebServiceURLProvider';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchComponent } from '../components/search/search.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ShareProducts: Product[];
  searchProducts:Product[];
  constructor(
    private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient,
    private customErrorHandler: CustomErrorHandler) { }

  private baseUrl = this.webServiceURLProvider.getWebServicesURL() + '/products';


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
    .pipe(catchError(this.customErrorHandler.handleError));
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id)
    .pipe(catchError(this.customErrorHandler.handleError));
  }
  updateProduct(product: Product):Observable<any>{
      return this.http.put<any>(this.baseUrl + '/updateProducts', product, httpOptions)
      .pipe(catchError(this.customErrorHandler.handleError));

    }
  saveProduct(product: Product):Observable<any>{
      return this.http.post<any>(this.baseUrl + '/saveProducts', product, httpOptions)
      .pipe(catchError(this.customErrorHandler.handleError));

    }
  deleteProduct(id: string):Observable<any> {
      return this.http.delete<any>(this.baseUrl + '/deleteProduct/' + id)
      .pipe(catchError(this.customErrorHandler.handleError));

  }

  uploadImage(selectedFile:File): Observable<any> {
    const imageFile = new FormData();
    imageFile.append('file',selectedFile);
    return this.http.post<any>(this.baseUrl + '/uploadFile', imageFile)
        .pipe(catchError(this.customErrorHandler.handleError));
  }


  getProductByCategory(idCategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/GetByCategory/' +idCategory, httpOptions)
    .pipe(catchError(this.customErrorHandler.handleError));
  }

  getProductBySet(idSet: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/GetBySet/' +idSet, httpOptions)
    .pipe(catchError(this.customErrorHandler.handleError));
  }

  getProductsBySearch(search: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/getBySearch/' +search, httpOptions)
    .pipe(catchError(this.customErrorHandler.handleError));
  }

  shareData(products: Product[]){
    this.ShareProducts= products;

  }
  getShareData(){
    return this.ShareProducts;
  }

  shareDataBySearch(products: Product[]){
    this.searchProducts= products;

  }
  getSearchData(){
    return this.searchProducts;
  }

  getImage(imageName: string): Observable<string> {
    return this.http.get<string>(this.baseUrl + '/image/' + imageName)
    .pipe(catchError(this.customErrorHandler.handleError));
  }


}
