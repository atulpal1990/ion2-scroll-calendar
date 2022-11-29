import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '', redirectTo: '/home/my-home', pathMatch: 'full'
  },
  {
    path: 'home',component: HomePage,
    
    children: [
      {
        path: '', redirectTo: '/my-home', pathMatch: 'full'
      },
      {
        path: 'my-home', loadChildren: () => import('../my-home/my-home.module').then( m => m.MyHomePageModule)
      },
      {
        path: 'my-trips', loadChildren: () => import('../my-trips/my-trips.module').then( m => m.MyTripsPageModule)
      },
      {
        path: 'more', loadChildren: () => import('../more/more.module').then( m => m.MorePageModule)
      }
    ] 
  },
  {
    path: 'hotel-city-search', loadChildren: () => import('../hotel-city-search/hotel-city-search.module').then( m => m.HotelCitySearchPageModule)
  },
  {
    path: 'flight-city-search', loadChildren: () => import('../flight-city-search/flight-city-search.module').then( m => m.FlightCitySearchPageModule)
  },
  {
    path: 'car-city-search', loadChildren: () => import('../car-city-search/car-city-search.module').then( m => m.CarCitySearchPageModule)
  },
  
 
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
