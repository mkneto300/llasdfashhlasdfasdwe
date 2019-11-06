import { UserService } from './../services/user.service';
import { AlertService } from './../services/alert.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class FunctionProvider {

  constructor( private userService: UserService, private alertService: AlertService,
    private router: Router ) { }

  login(user) {
    this.userService.login(user)
    .subscribe(resp => {
        localStorage.setItem('token', resp.headers.get('Authorization'));
        this.router.navigate(['/home']);
            },
      error => {
        this.alertService.error('Incorrect password', false);
      });
  }

  setLocalStorageUser(user: User) {
    localStorage.setItem('user',JSON.stringify(user));
  }

  logout() {
   localStorage.clear();
    this.router.navigate(['/login']);
  }



/* example for get the roles
var ArrayData = [5, 6, 9];
localStorage.setItem("list_data_key",  JSON.stringify(ArrayData));
// retrieve stored data (JSON stringified) and convert
var storedData = localStorage.getItem("ArrayData ");
if (storedData) {
    ArrayData = JSON.parse(storedData);
}
*/
}
