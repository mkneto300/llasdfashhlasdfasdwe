import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
const CODE_USED= "CodeUsed";
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {

  password = "";
  auxiliarPassword="";
  user:User;
  constructor(private route: ActivatedRoute, private userService: UserService,
    private routerNavigate: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserByToken(params.token).subscribe(
        user => {
         this.user = user; 
        }
      );
     });
  }
  updatePassword(){
    if(this.password === this.auxiliarPassword)
    {
      this.user.password = this.password;
      this.user.code = this.user.code + CODE_USED;
      this.userService.save(this.user).subscribe(
       response => {
         //password has been changed
         this.routerNavigate.navigate(['/login']);
       } 
      )
    }
  }

}
