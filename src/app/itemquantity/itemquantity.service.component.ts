
import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OrderSummery{
     constructor(private http:Http){

    }
     getOrderList(){
      return  this.http.get(`http://139.162.27.63:5767/api/Customers`).map((res:Response)=>res.json());
    }

}