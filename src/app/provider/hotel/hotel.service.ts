import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOTEL_BASE_URL,HOTEL_DEST_URL, APP_HOME_PAGE,HOTEL_MARKUP_URL, HOTEL_BOOKING, HOTEL_USER_ID, HOTEL_USER_PASSWORD, Hotel_ACCESS, HOTEL_IP_ADDRESS } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public http: HttpClient) { }

  getHotelResults(jsonObj): Promise<Object> {
    return new Promise((resolve, reject) => {
      try {
        const url = HOTEL_BASE_URL + "hotel_search";
        let headers = {
          "Content-Type": "application/json"
        };
        this.http.post(url, jsonObj).subscribe(data => {
          console.log("results of provider", JSON.stringify(data));
            if (data == 200) {
              resolve(data);
            } else {
              reject(data);
            }
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}
