import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { FunctionProvider } from 'src/app/helpers/FunctionProvider';
import { User } from 'src/app/models/user';
import { EmailService } from 'src/app/services/email.service';
import { CountrystatescitiesService } from 'src/app/services/countrystatescities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private alertService: AlertService,
    private userService: UserService, private functionProvider: FunctionProvider,
    private emailService: EmailService,
    private countryService: CountrystatescitiesService) { }
    user: User = new User();
    auxiliarPassword: string;
    countries: any;
    countrySelected: string;
    showStates = false;
    stateSelected: string;
    states: any;
    showCities = false;
    cities: any;
    citySelected: string;
    address: string;
  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

  validate() {
    // verify if the passwords are the same && if the username doesn't exist
    if (this.user.username === undefined || this.user.username === ''
      || this.user.name === undefined || this.user.name === ''
      || this.user.lastname === undefined || this.user.lastname === '') {
      this.alertService.error('All fields are required', false);
      return;
    }
      if (this.user.password !== undefined && this.user.password === this.auxiliarPassword) {

        this.userService.getUser(this.user.username).subscribe(resp => {
          this.alertService.error('User already exist', false);
        },  error => {
          this.userService.findUserByMail(this.user.email)
          .subscribe(resp => {
            this.alertService.error('Email already exist', false);
          },  error => {
            //username and email doesnt exist
            this.saveUser();
        });
      });



      } else {
        this.alertService.error('Passwords dont match', false);
      }

  }
  saveUser() {
    this.user.role='Customer'
    this.userService.save(this.user)
    .subscribe(
      resp => {
        this.userService.getUser(this.user.username)
        .subscribe(user => {
            this.functionProvider.setLocalStorageUser(user);
            this.sendEmailForVerifyAccount();
          });

            },
      error => {
        this.alertService.error(error, false);
      });
  }


  sendEmailForVerifyAccount() {
    this.emailService.sendEmail(this.user.email)
    .subscribe(
    );
    //print alert
    this.router.navigate(['/home']);

  }
  countryChange() {

    this.states =  this.countryService.getStatesByCountry(this.countrySelected);
    this.showStates = true;

  }
  stateChange(){
    this.cities = this.countryService.getCityByCountryAndState(this.countrySelected,this.stateSelected);
    this.showCities = true;

  }


}
