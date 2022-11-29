import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hotel-city-search',
  templateUrl: './hotel-city-search.page.html',
  styleUrls: ['./hotel-city-search.page.scss'],
})
export class HotelCitySearchPage implements OnInit {

  constructor( private router: Router, public http:HttpClient,private location: Location ) { }

  ngOnInit() {
    this.getMarkup()
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

 

  // const doGet = () => {
  //   const options = {
  //     url: 'https://book.freedom.travel/test-website/apphotel/hotel_dest_check?dest='+query,
      
  //     headers: { 'X-Fake-Header': 'Max was here' },
  //     params: { size: 'XL' },
  //   };
  //   console.log(options.url)
  //   const response =  Http.request({ ...options, method: 'GET' })
  //   console.log(response);
  // }

  }

  gotoGetCity(city){
     this.location.back();
  }

  getMarkup(){
    this.http.get('https://book.freedom.travel/home/hotel_markup').subscribe(data=>{
      console.log(data);
    }),error=>{
      console.log(error);
    }
  }
  gotoHotelResult() {
    this.router.navigateByUrl('/hotel-results')
  }
}
