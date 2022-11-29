import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calenders',
  templateUrl: './calenders.page.html',
  styleUrls: ['./calenders.page.scss'],
})
export class CalendersPage {

  constructor(private modalCtrl: ModalController) {
    this.hotelDates()
   }



  ngOnInit() {
    // this.hotelDates()
  }
  async hotelDates() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Title goes here...',
      color: 'danger',
      closeIcon: true
    };
    let myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options }
    });
    myCalendar.present();
    const { data, role } = await myCalendar.onWillDismiss();
    console.log(data)
  }
}
