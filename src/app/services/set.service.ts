
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { Observable } from 'rxjs';
import { Style } from '../models/style';
import { catchError } from 'rxjs/operators';
import { Sett } from '../models/set';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};

@Injectable({
  providedIn: 'root'
})
export class SetService {
  private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  constructor(private webServiceURLProvider: WebServiceURLProvider,
    private http: HttpClient, private customErrorHandler: CustomErrorHandler) { }


    getSets(): Observable<Sett[]> {
      console.log(this.baseUrl);
      return this.http.get<Sett[]>(this.baseUrl + '/set', httpOptions)
      .pipe(catchError(this.customErrorHandler.handleError));
    }
}
