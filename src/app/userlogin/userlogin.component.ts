import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './userlogin.servic.component'
import { User } from './userlogin.class.component';
import {UserLoginDetails} from './userlogin.class.component';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [UserLogin]
})
export class UserloginComponent implements OnInit {
  userlogindata:string;
  user: User = {
    email: '',
    password: ''
  };
  constructor(private _router: Router, private userservice: UserLogin) { }

  ngOnInit() {
  }

  loginSubmit() {

    this.userservice.userdataLogin(this.user).subscribe(data => this.userlogindata = data.data,
      error => alert(error), () => console.log("done" + JSON.stringify(this.userlogindata))
    );
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
