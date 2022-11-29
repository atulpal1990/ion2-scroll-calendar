import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CitySearchComponent } from '../components/city-search/city-search.component';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import { CalanderComponent } from '../components/calander/calander.component';
import { PopoverController } from '@ionic/angular';
import { AddHotelRoomsComponent } from '../components/add-hotel-rooms/add-hotel-rooms.component';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.page.html',
  styleUrls: ['./my-home.page.scss'],
})
export class MyHomePage implements OnInit {
  booking: string ="hotel";
  @ViewChild('popover') popover;
  isOpen = false;
  hotelCity={city: "",content:"",country: "",flag: 1,id: "",latitude: "",longitude: "",position: ""}
  checkInDate= new Date();
  checkoutDate=new Date();
  roleMsg = '';
  constructor(private router: Router,private modalCtrl: ModalController,public http:HttpClient,public popoverController: PopoverController) { 
    
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: AddHotelRoomsComponent,
      event: e,
    });

    await popover.present();

    const { data, role }  = await popover.onDidDismiss();
    console.log(role,data)
    this.roleMsg = `Popover dismissed with role: ${role}`;
  }

  presentPopoverf(ev: Event) {
    this.popover.event = ev;
    this.isOpen = true;
  }

  async goTocalander() {
    const modal = await this.modalCtrl.create({
      component: CalanderComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    console.log(data)
    if (role === 'confirm') {
     
    }else{
      
    }
    
  }
  async hotelDates() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: ' ',
      color:'danger',
      closeIcon: true
    };
  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options }
  });
  myCalendar.present();
  const { data, role } = await myCalendar.onWillDismiss();
  console.log(data)
    if (data) {
      this.checkInDate = data.from.dateObj
      this.checkoutDate = data.to.dateObj
    }else{

      
    }
}

  onChange($event) {
    console.log($event);
  }
  ngOnInit() {
    this.getMarkup();
  }
  
  gotoCalander(){
    this.router.navigate(['/calenders'])
  }
  getMarkup(){
    this.http.get('https://book.freedom.travel/home/hotel_markup').subscribe(data=>{
      console.log(data);
    }),error=>{
      console.log(error);
    }
  }
  goToHotelsearchs() {
    this.router.navigate(['hotel-city-search'])
  }
  goToFlightsearchCity(){
    this.router.navigate(['/flight-city-search'])
  }
  getCarPickUpLocation(data) {
    this.router.navigate(['/car-city-search'],data)
  }

  async goToHotelsearch() {
    const modal = await this.modalCtrl.create({
      component: CitySearchComponent,
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    console.log(data)
    this.hotelCity = data
    if (role === 'confirm') {
      this.hotelCity = data
    }else{
      this.hotelCity = {city: "",content:"",country: "",flag: 1,id: "",latitude: "",longitude: "",position: ""}
    }
    
  }
 
  hotelSearch(){
    this.router.navigate(['home','my-home','hotel-result'])
  }
}
