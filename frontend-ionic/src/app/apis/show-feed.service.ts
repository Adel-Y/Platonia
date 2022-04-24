import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowFeedService {
  private url ='http://127.0.0.1:8001/'

  constructor(private http: HttpClient) { }

    getFeed(){
      return this.http.get('http://127.0.0.1:8001/landing');
    }

  
}
