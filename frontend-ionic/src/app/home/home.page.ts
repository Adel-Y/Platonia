import { Component } from '@angular/core';
import {LoginService} from '../apis/login.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any={};

  constructor(private service:LoginService, private router:Router) {}



  onClick(form:NgForm){
     console.log(form.value);

    this.service.login(form.value).subscribe(response =>{
      console.log(response);

      if(response['authenticated']==false){
          console.log ("login failed");
        
      }
      else if(response['authenticated']==true)
      { 
        console.log(response['user'].id)
        localStorage.setItem('user_id',response['user'].id);

          this.router.navigate(['/tabs']);
      }


    });
  }

}
