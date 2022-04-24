import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ShowEventService} from '../apis/show-event.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  event:any=[];
  constructor(private service: ShowEventService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.queryParamMap.get('id');
    this.service.getEvent(id).subscribe( response => {
      this.event=response;
    });
  }

}
