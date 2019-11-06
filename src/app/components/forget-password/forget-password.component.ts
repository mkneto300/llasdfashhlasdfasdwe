import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email: string;

  constructor(private userService: UserService,private route: Router) { }

  ngOnInit() {
  }

  sendEmail(){
    this.userService.createToken(this.email)
    .subscribe();
    // alert check the email account
    this.route.navigate(['/home']);

  }

}
