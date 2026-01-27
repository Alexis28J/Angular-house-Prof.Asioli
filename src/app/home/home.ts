import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../model/housing-location-info';
import { HousingService } from '../services/housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>      
      <form>        
        <input type="text" placeholder="Filter by city" />        
        <button class="primary" type="button">Search</button>      
      </form>    
    </section>
    <section class="results">
      @for (housingInfo of housingLocationList; track $index) {
        <app-housing-location [info]="housingInfo" />    
      }
    </section>
  `,
  styleUrls: ['./home.scss'],
})
export class Home {

  housingLocationList: HousingLocationInfo[] = [];
  housingServ: HousingService = inject(HousingService);  

  constructor(){
    this.housingLocationList = this.housingServ.getAllHousingLocations()
  }

}

