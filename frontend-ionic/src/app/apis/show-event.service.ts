import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowEventService {

  constructor(private http: HttpClient) { }

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
}
