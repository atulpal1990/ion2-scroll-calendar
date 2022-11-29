import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitySearchComponent } from './city-search/city-search.component';
import { CalanderComponent } from './calander/calander.component';
import { AddHotelRoomsComponent } from './add-hotel-rooms/add-hotel-rooms.component';



@NgModule({
  declarations: [
    CitySearchComponent,
    CalanderComponent,
    AddHotelRoomsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CitySearchComponent,
    CalanderComponent,
    AddHotelRoomsComponent
  ]
})
export class ComponentsModule { }
