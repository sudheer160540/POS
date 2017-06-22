import { Component, OnInit } from '@angular/core';
import { ItemlistComponent } from '../itemlist/itemlist.component';
import {OrderSummery}  from '../itemquantity/itemquantity.service.component';
@Component({
  selector: 'app-itemquantity',
  templateUrl: './itemquantity.component.html',
  styleUrls: ['./itemquantity.component.css'],
    providers: [OrderSummery]

  
})
export class ItemquantityComponent implements OnInit {
 orderList=[];
  constructor(private orderService:OrderSummery) { }

  ngOnInit() {
     this.orderService.getOrderList().subscribe(data => this.orderList = data.data);
  }

}
