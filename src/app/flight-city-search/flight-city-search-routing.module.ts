import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightCitySearchPage } from './flight-city-search.page';

const routes: Routes = [
  {
    path: '',
    component: FlightCitySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightCitySearchPageRoutingModule {}
