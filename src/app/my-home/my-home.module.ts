import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';
import { IonicModule } from '@ionic/angular';

import { MyHomePageRoutingModule } from './my-home-routing.module';

import { MyHomePage } from './my-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHomePageRoutingModule,
    CalendarModule
  ],
  declarations: [MyHomePage]
})
export class MyHomePageModule {}
