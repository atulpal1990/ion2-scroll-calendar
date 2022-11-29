import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendersPageRoutingModule } from './calenders-routing.module';

import { CalendersPage } from './calenders.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendersPageRoutingModule,
    CalendarModule
  ],
  declarations: [CalendersPage]
})
export class CalendersPageModule {}
