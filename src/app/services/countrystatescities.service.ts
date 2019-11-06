declare var require: any;
import { Injectable } from '@angular/core';
const apiJsonCountryStatesCities = require('countrycitystatejson')

@Injectable({
  providedIn: 'root'
})
export class CountrystatescitiesService {


  constructor() { }

  getCountries() {
    return apiJsonCountryStatesCities.getCountries();
    }
  
  getStatesByCountry(shortNameCountry: string) {
    return apiJsonCountryStatesCities.getStatesByShort(shortNameCountry);
  }
  getCityByCountryAndState(shortNameCountry: string, stateName: string) {
    return apiJsonCountryStatesCities.getCities(shortNameCountry, stateName);
  }

}
