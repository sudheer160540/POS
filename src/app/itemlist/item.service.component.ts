import { Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemMenuSerive {
  constructor(private http: Http) {

  }
  getItemList() {
    return this.http.get(`http://139.162.27.63:5767/api/Items`).map((res: Response) => res.json())
  }
  cartOrderPlace(items,subtotal) {
    var postdata = { items: items,subTotal:subtotal,grandTotal:subtotal };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://139.162.27.63:5767/api/ContactUs', postdata, headers)
      .map(res => res.json());
  }
}