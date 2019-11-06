import { UserService } from './../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { FunctionProvider } from './../../helpers/FunctionProvider';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private functionProvider: FunctionProvider) { }

  ngOnInit() {
  }
validateData() {
  // validate if the user exist
  if (this.user.username === undefined || this.user.name === ''
    || this.user.password === undefined || this.user.password === '') {
    this.alertService.error('All fields are required', false);
  } else {
    this.userService.getUser(this.user.username)
    .subscribe(user => {
        if(user.state === true) {
          this.functionProvider.setLocalStorageUser(user);
          this.login();
        } else {
          //alert, the user exitst but is not active still
        }

      }
    ,  error => {
      if (error.status === 404) {
        this.alertService.error('User doesnt exist', false);
      } else {
      this.alertService.error(error, false);
    }
    });
  }

}
  login() {
    this.functionProvider.login(this.user);
  }


}
