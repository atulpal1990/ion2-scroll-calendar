import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHomePage } from './my-home.page';

const routes: Routes = [
  {
    path: '',component: MyHomePage,
    // children:[
    //   {
    //     path: 'hotel-results', redirectTo: '/home/my-home', pathMatch: 'full'
    //   },
    //   {
    //     path: 'hotel-results',loadChildren: () => import('../hotel-results/hotel-results.module').then( m => m.HotelResultsPageModule)
    //   },
    // ]
  },
  {
    path: 'hotel-result',
    loadChildren: () => import('./hotel-result/hotel-result.module').then( m => m.HotelResultPageModule)
  }
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHomePageRoutingModule {}
