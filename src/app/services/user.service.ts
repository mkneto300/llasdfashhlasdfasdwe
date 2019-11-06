import { Injectable } from '@angular/core';
import { WebServiceURLProvider } from './../helpers/WebServiceURLProvider';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { CustomErrorHandler } from './../helpers/CustomErrorHandler';

import { Observable  } from 'rxjs';
import { catchError} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , observe: 'response' })

};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient, private router: Router, private errorHandler: CustomErrorHandler
    , private webServiceURLProvider: WebServiceURLProvider) { }
    private baseUrl = this.webServiceURLProvider.getWebServicesURL();
  
    login (user: User): Observable<any> {
      return this.http.post<any>(this.baseUrl + '/login',user, {headers: httpOptions.headers, observe: 'response'})
        .pipe(catchError(this.errorHandler.handleError));
          }
    
    save(user: User): Observable<any> {
      return this.http.post<any>(this.baseUrl + '/users/save', user, httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
    }
    
    getUser(username: string): Observable<User> {
      return this.http.post<User>(this.baseUrl + '/users/username',username, httpOptions)
        .pipe(catchError(this.errorHandler.handleError));
    }

    findUserByMail(email: string): Observable<User> {
      return this.http.post<User>(this.baseUrl + '/users/findUserByMail',email, httpOptions)
        .pipe(catchError(this.errorHandler.handleError));
    }
    activeAccount(code: string): Observable<boolean>
    {
      return this.http.post<boolean>(this.baseUrl + '/users/activate',code, httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
    }
    createToken(email: string): Observable<any>
    {
      return this.http.post<any>(this.baseUrl + '/users/forget',email, httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
    }

    findUserByToken(token: string): Observable<User> {
      return this.http.post<User>(this.baseUrl + '/users/findUserByToken',token, httpOptions)
        .pipe(catchError(this.errorHandler.handleError));
    }
    validatePassword(user: User): Observable<boolean> {
      return this.http.post<boolean>(this.baseUrl + '/users/validatePassword', user, httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
    }
}
