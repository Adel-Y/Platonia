import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../apis/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user:any=[];
  constructor(private service: ProfileService,private router:Router) { }

  ngOnInit() {
    this.service.getUser(localStorage.getItem('user_id')).subscribe(response=>{
      this.user=response;
      console.log(response);
    });
  }

  update(form:NgForm){
    console.log(form.value);
    this.service.update(form.value).subscribe(response=>{
      console.log(response);
      if(response['user']==1){
        this.router.navigate(['tabs/profile']);
      }
    });
  }

  go(){
    this.router.navigate(['tabs/profile']);
  }

}
