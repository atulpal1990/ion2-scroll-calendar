import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelResultPageRoutingModule } from './hotel-result-routing.module';

import { HotelResultPage } from './hotel-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelResultPageRoutingModule
  ],
  declarations: [HotelResultPage]
})
export class HotelResultPageModule {}
