import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {ShowEventService} from '../apis/show-event.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  data:any=[];
  cap:any;
  constructor(private service: ShowEventService, private router:Router) { }

  ngOnInit() {
    let id = localStorage.getItem('event_id');

    this.service.getEvent(id).subscribe( response => {
      this.data=response['event'];
      this.cap=response['capacity'];
      console.log(this.cap);
    });
  }

  go(){
    this.router.navigate(['tabs']);
  }

  join(){
    this.service.joinEvent(localStorage.getItem('user_id'),localStorage.getItem('event_id'))
    .subscribe(response =>{
      console.log(response);
    })
  }
}
