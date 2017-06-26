import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './userlogin.servic.component'
import { User } from './userlogin.class.component';
import {UserLoginDetails} from './userlogin.class.component';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserLogin]
})
export class UserloginComponent implements OnInit {
  userlogindata:string;
  isAuthenticated:boolean=false;
  user: User = {
    email: '',
    password: ''
  };
  constructor(private _router: Router, private userservice: UserLogin) { }

  ngOnInit() {
  }

  loginSubmit() {
 // let userInfo={};
    this.userservice.userdataLogin(this.user).subscribe(data => {
      console.log("data.data"+JSON.stringify(data));
      if(data.status=='success'){
       
        this.userlogindata = data.data;
       // Cookie.setCookie('ticket_status', data.data.id);
       window.localStorage.setItem('auth_key',data.data.id);
       console.log("user"+window.localStorage.getItem('auth_key'));
        this.isAuthenticated=true;
      
      }
     },
      error => alert(error), () => console.log("done" + JSON.stringify(this.userlogindata))
    );
    //userInfo=this.userlogindata;
    console.log(this.userlogindata);
    this._router.navigate(['dineorder']);
    console.log(this.userlogindata);
    //   if(this.user.email=='admin'&&this.user.password=='admin'){
    //  this._router.navigate(['dineorder']);
    //   }else{
    //     alert("Wrong username and password");
    //   }


  }
}
