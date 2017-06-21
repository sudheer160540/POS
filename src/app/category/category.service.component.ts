import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CategoryServiceList{
    constructor(private http:Http){

    }
    getCategoryList(){
      return  this.http.get(`http://139.162.27.63:5767/api/Categories?filter={"include": [{ "relation":"items", "scope": {"where": {"and":[{"status":"Active","clientId": "5873622de5caf37a24a8eb61"}]}}}]}`).map((res:Response)=>res.json());
    }
}