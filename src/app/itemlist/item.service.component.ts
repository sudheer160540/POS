import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemMenuSerive{
  constructor(private http:Http){

  }
  getItemList(){
      //alert("hello");
    return  this.http.get(`http://139.162.27.63:5767/api/Items`).map((res:Response)=>res.json())
  }
}