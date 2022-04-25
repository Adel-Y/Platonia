import { Component, OnInit } from '@angular/core';
import {ShowEventService} from '../apis/show-event.service'

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.page.html',
  styleUrls: ['./my-activity.page.scss'],
})
export class MyActivityPage implements OnInit {

  constructor(private service: ShowEventService) { }
events:any=[];

  ngOnInit() {
    this.service.getUserEvent(localStorage.getItem('user_id')).subscribe(response => {
      this.events=response;
      console.log('retrieved');
    })
  }

}
