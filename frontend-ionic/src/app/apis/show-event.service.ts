import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from './profile.service';
@Injectable({
  providedIn: 'root'
})
export class ShowEventService {

  constructor(private http: HttpClient, private service: ProfileService) { }
  user:any=[];
  private url ='http://127.0.0.1:8001/api/'

  getEvent(id){
    return this.http.get(this.url+'eventView/' + id);
  }

  getUserEvent(id){
    return this.http.get(this.url+'userView/' + id);
  }

  getFeed(){
    return this.http.get(this.url+'landing');
  }

  createEvent(data){
 
    return this.http.post(this.url+'newEvent',
    {
    'user_id':localStorage.getItem('user_id'),
    'planner_name':localStorage.getItem('name'),
    'event_topic':data.event_topic,
    'event_place':data.event_place, 
    'event_date':data.event_date,
    'event_time':data.event_time,
    'event_capacity':data.event_capacity,
    'event_description':data.event_description
  });

  }

  joinEvent(user_id,event_id){
    return this.http.post(this.url+'joinEvent',{
      'user_id': user_id,
      'event_id':event_id
    });
  }
}
