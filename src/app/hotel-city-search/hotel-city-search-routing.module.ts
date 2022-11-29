import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelCitySearchPage } from './hotel-city-search.page';

const routes: Routes = [
  {
    path: '',
    component: HotelCitySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelCitySearchPageRoutingModule {}
