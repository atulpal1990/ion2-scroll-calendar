import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-add-hotel-rooms',
  templateUrl: './add-hotel-rooms.component.html',
  styleUrls: ['./add-hotel-rooms.component.scss'],
})
export class AddHotelRoomsComponent implements OnInit {
  Arr = Array;
  rooms=[{
    room_no:1,
    adult:1,
    child:0,
    child_age:[0],
    roomSize:1,
  }]
  
  public press: number = 2;
  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {}

  decreaseAdults(i){
    if(this.rooms[i].adult>1){
      this.rooms[i].adult--;
      this.rooms[i].roomSize--;
    }
  }

  increaseAdults(i){
    if(this.rooms[i].adult<4 && this.rooms[i].adult+this.rooms[i].child<6){
      this.rooms[i].adult++;
      this.rooms[i].roomSize++;
    } 
  }

  decreaseChildren(i){
    if(this.rooms[i].child>0){
      this.rooms[i].child--;
      this.rooms[i].child_age.pop();
      this.rooms[i].roomSize--;
    }
  }
  increaseChildren(i){
    if(this.rooms[i].child<4 && this.rooms[i].adult+this.rooms[i].child<6){
      this.rooms[i].child++;
      this.rooms[i].child_age.push(2)
      this.rooms[i].roomSize++;
    } 
  }

  addRoom(e){
    this.rooms.push({
      room_no:this.press++,
      adult:1,
      child:0,
      child_age:[0],
      roomSize:1,
    })
  }

  deleteRoom(i){
    console.log(i);
    this.rooms.splice(i, 1);
  }

  done(){
    return this.popCtrl.dismiss(this.rooms, 'confirm'); 
  }

  close(){
    return this.popCtrl.dismiss( 'cancle'); 
  }

}
