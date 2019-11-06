import { Injectable } from '@angular/core';
import { WebServiceURLProvider } from '../helpers/WebServiceURLProvider';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomErrorHandler } from '../helpers/CustomErrorHandler';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private router: Router, private errorHandler: CustomErrorHandler
    , private webServiceURLProvider: WebServiceURLProvider) { }
    private baseUrl = this.webServiceURLProvider.getWebServicesURL();

  sendEmail(emailAccount: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + '/email', emailAccount)
    .pipe(catchError(this.errorHandler.handleError));
  }
}
