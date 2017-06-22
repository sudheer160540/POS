import { Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class UserLogin{
  constructor(private _http:Http){

  }
  userdataLogin(userdetails){
    var postdata = { email: userdetails.email,password:userdetails.password};
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
      return this._http.post('http://139.162.27.63:5767/api/Clients/login',postdata,headers).map(res=>res.json());
  }
}