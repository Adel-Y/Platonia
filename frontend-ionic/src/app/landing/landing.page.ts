import { Component, OnInit } from '@angular/core';
import {ShowEventService} from '../apis/show-event.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  events:any=[];

  constructor(private service: ShowEventService) { }

  ngOnInit() {
    this.service.getFeed().subscribe(response =>{
      this.events=response;
      console.log(this.events);
      
    });
  }

}
