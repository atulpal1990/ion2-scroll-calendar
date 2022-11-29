import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarCitySearchPageRoutingModule } from './car-city-search-routing.module';

import { CarCitySearchPage } from './car-city-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarCitySearchPageRoutingModule
  ],
  declarations: [CarCitySearchPage]
})
export class CarCitySearchPageModule {}
