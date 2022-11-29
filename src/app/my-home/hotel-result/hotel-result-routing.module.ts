import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelResultPage } from './hotel-result.page';

const routes: Routes = [
  {
    path: '',
    component: HotelResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelResultPageRoutingModule {}
