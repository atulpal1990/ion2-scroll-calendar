import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss'],
})
export class CalanderComponent implements OnInit {
  rooms = [
    {
      room_no: 1,
      adult: 2,
      child: 0,
      child_age: [
        2
      ],
      roomSize: 1
    }
  ]
  constructor(public popCtrl: PopoverController) { }

  ngOnInit(){
    
  }
 
  done(data){
    console.log(data)
  }
  selectGuest(){
    return this.popCtrl.dismiss(this.rooms, 'confirm');
  }
 
}
