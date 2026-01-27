import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../model/housing-location-info';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="listing">      
      <img class="listing-photo" src="{{info().photo}}" alt="Exterior photo of {{ info().name }}" crossorigin/>      
      <h2 class="listing-heading">{{ info().name }}</h2>      
      <p class="listing-location">{{ info().city }}, {{ info().state }}</p>
    </section>
  `,
  styleUrl: './housing-location.scss',
})
export class HousingLocation {

  info = input.required<HousingLocationInfo>();

}
