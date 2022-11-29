import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelCitySearchPageRoutingModule } from './hotel-city-search-routing.module';

import { HotelCitySearchPage } from './hotel-city-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelCitySearchPageRoutingModule
  ],
  declarations: [HotelCitySearchPage]
})
export class HotelCitySearchPageModule {}
