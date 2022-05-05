import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../apis/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user:any=[];
  constructor(private service : ProfileService, private router:Router) { }

  ngOnInit() {
    // this.service.getUser(localStorage.getItem('user_id')).subscribe(response=>{
    //   this.user=response;
    //   console.log(response);
    // });
  }

  ionViewDidEnter(){
    this.service.getUser(localStorage.getItem('user_id')).subscribe(response =>{
      this.user=response;
      console.log(this.user);
      
    });
  }

  go(){
    this.router.navigate(['edit-profile']);
  }
}
