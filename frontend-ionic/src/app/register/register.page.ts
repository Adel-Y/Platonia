import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../apis/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private service:LoginService, private router:Router) { }

  ngOnInit() {
  }

  onClick(form:NgForm){
    console.log(form.value);
    this.service.register(form.value).subscribe(response=>{

      console.log(response['accepted']);


      if(response['accepted']==true){
        this.router.navigate(['/home']);
      }
      
      else if(response['accepted']==false){
        console.log('you have an error');
      }

    });

  }


}
