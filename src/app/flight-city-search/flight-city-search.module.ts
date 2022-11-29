import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightCitySearchPageRoutingModule } from './flight-city-search-routing.module';

import { FlightCitySearchPage } from './flight-city-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightCitySearchPageRoutingModule
  ],
  declarations: [FlightCitySearchPage]
})
export class FlightCitySearchPageModule {}
