import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/provider/hotel/hotel.service';
import { Hotel_ACCESS,HOTEL_IP_ADDRESS,HOTEL_USER_ID,HOTEL_USER_PASSWORD } from 'src/environments/environment';


@Component({
  selector: 'app-hotel-result',
  templateUrl: './hotel-result.page.html',
  styleUrls: ['./hotel-result.page.scss'],
})
export class HotelResultPage implements OnInit {
  searchResults:any=[];statusData;
  constructor(public hotelService:HotelService) { }

  ngOnInit() {
    this.hotelSearch();
  }

  hotelSearch() {
    let obj = {
      access: Hotel_ACCESS,
      ip_address: HOTEL_IP_ADDRESS,
      user_id: HOTEL_USER_ID,
      user_password: HOTEL_USER_PASSWORD,
      // checkin: this.dateFormatter(this.checkInDate),
      // checkout: this.dateFormatter(this.checkoutDate),
      // city_name: this.hotelCity.city,
      // client_nationality: CLIENT_NATIONALITY,
      // country_name: this.hotelCity.country,
      // city_id:this.hotelCity.id,
      // requiredCurrency: this.currency,
      // latitude: this.hotelCity.latitude,
      // longitude: this.hotelCity.longitude,
     // hotelCodes: this.hotelCity.country,
      radius: 20,
      maxResult: 20,
      //occupancy: this.rooms,
    };
    console.log("mysendobj", JSON.stringify(obj));
    this.hotelService.getHotelResults(obj).then(data=>{
      console.log(data)
    })

  }
 
}
