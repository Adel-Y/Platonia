import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../apis/profile.service';
import { ShowEventService } from '../apis/show-event.service';

import { LandingPage } from '../landing/landing.page';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage implements OnInit {

  constructor(private router:Router, private service : ShowEventService, private pservice:ProfileService ) { }
  user:any=[];

  ngOnInit() {
    this.pservice.getUser(localStorage.getItem('user_id')).subscribe(response =>{
      this.user=response;
    });
  }

  go(){
    this.router.navigate(['tabs']);
  }

  publish(form:NgForm){
    console.log(form.value);

    this.service.createEvent(form.value).subscribe(response=>{
      console.log(response);
      
    });
    
    this.router.navigate(['tabs']);
  
  }
}
