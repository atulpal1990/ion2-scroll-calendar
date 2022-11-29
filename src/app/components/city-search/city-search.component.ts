import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {

  constructor(private router: Router, public http:HttpClient,private modalCtrl: ModalController ) { }

  
  ngOnInit() {
    
  }

  hotelCity:any=[];
    handleChange(event) {
    const query = event.target.value.toLowerCase();
  //  this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
   const url = "https://book.freedom.travel/test-website/apphotel/hotel_dest_check?dest=" + query;
        this.http.get(url).subscribe(data => {
            console.log(data)  
            this.hotelCity = data     
          }),err => {
            console.log(err);
          }   
  }

  

 
  gotoHotelResult() {
    this.router.navigateByUrl('/hotel-results')
  }
  gotoGetCity(city){
    return this.modalCtrl.dismiss(city, 'confirm');
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  
}
