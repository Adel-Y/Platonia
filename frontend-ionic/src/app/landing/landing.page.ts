import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShowEventService} from '../apis/show-event.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  events:any=[];


  constructor(private service: ShowEventService ,private router:Router) { 

  }
  


  ngOnInit() {
    


  }

  ionViewDidEnter(){
    this.service.getFeed().subscribe(response =>{
      this.events=response;
      console.log(this.events);
      
    });
  }



  go(id){
    localStorage.setItem('event_id',id);
    this.router.navigate(['activity']);
  }

  add(){
    this.router.navigate(['add-activity'], {skipLocationChange: false});

    
  }

}
