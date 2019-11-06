import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionProvider } from 'src/app/helpers/FunctionProvider';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  user : User;

 @Input() show: boolean = true;
  isLogged = false;
  constructor(private router: Router,
    private functionProvider: FunctionProvider, ) { }

  ngOnInit() {
    if(localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    if(localStorage.getItem('token') && localStorage.getItem('user')) this.isLogged = true;
  }



  adminProducts() {
    this.router.navigate(['/products/adminProducts']);

  }


seeCart() {
  this.router.navigate(['/order']);

}



  logout()
{
  this.functionProvider.logout();
}
}
