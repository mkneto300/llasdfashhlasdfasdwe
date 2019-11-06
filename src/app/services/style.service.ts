import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { Observable } from 'rxjs';
import { Style } from '../models/style';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  constructor(private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient, private customErrorHandler: CustomErrorHandler) { }


    getStyles(): Observable<Style[]> {
      return this.http.get<Style[]>(this.baseUrl + '/style', httpOptions)
      .pipe(catchError(this.customErrorHandler.handleError));
    }
}
