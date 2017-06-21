import { Component, OnInit,HostBinding } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  user={
    email:'',
    password:''
  };
loginSubmit(){
  console.log("hello"+JSON.stringify(this.user.email));
  if(this.user.email=='admin'&&this.user.password=='admin'){
 this._router.navigate(['dineorder']);
  }else{
    alert("Wrong username and password");
  }
 
  
}
}
