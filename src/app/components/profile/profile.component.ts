import { Component, OnInit } from '@angular/core';
import { FunctionProvider } from 'src/app/helpers/FunctionProvider';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  auxiliarPassword: string;
  currentPaswword: string;
  changePasswordComponent = false;
  isAuthorizedComponent = false;
  constructor(private functionProvider: FunctionProvider, private userService: UserService) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
  changePasswordRequest() {
    this.changePasswordComponent =true;   
   }
   isAuthorized() {
    this.user.password = this.currentPaswword;
    this.userService.validatePassword(this.user)
    .subscribe(response => {
      if(response)
      {        
        this.isAuthorizedComponent = true;
      }
      else {
        //alert, Invalid password
      }
    }, error => {

    })
   
   }
   changePassword() {
     if(this.user.password === this.auxiliarPassword) {
       this.userService.save(this.user)
       .subscribe( response => {
         //alert the password has been changed
        this.changePasswordComponent = false;
        this.isAuthorizedComponent = false;
       },error => { 

        });
     }
   }

}
