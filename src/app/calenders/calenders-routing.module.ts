import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendersPage } from './calenders.page';

const routes: Routes = [
  {
    path: '',
    component: CalendersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendersPageRoutingModule {}
