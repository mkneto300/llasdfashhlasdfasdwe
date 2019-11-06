import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-active-account',
  templateUrl: './active-account.component.html',
  styleUrls: ['./active-account.component.css']
})
export class ActiveAccountComponent implements OnInit {

  constructor(private userService: UserService, private route: Router,private routeParams: ActivatedRoute) { }

  ngOnInit() {
    let user: User;
    this.routeParams.params.subscribe(params => {
      this.userService.activeAccount(params.code).subscribe(
        response => {
          // alert saying the account is activate
          if (response === true) {
            this.route.navigate(['/login']);
           }else {
        // alert saying the account is not activate
           }


        }, error => {
         // error
          console.log('Error');
        }
      );
     });
  }

}
