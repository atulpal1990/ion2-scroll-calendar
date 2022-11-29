import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarCitySearchPage } from './car-city-search.page';

const routes: Routes = [
  {
    path: '',
    component: CarCitySearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarCitySearchPageRoutingModule {}
