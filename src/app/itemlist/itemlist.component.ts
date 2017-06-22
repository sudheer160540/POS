import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMenuSerive } from './item.service.component';
import {Router} from '@angular/router';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  providers: [ItemMenuSerive]
})
export class ItemlistComponent implements OnInit {
  itemmenulist = [];
  addItemList = [];
  postdata: string;
  subAmount;
  @Input() selectedItem;
  //@Output() outputevent:EventEmitter<any>=new EventEmitter();
  constructor(private itemList: ItemMenuSerive,private _router:Router) { }

  ngOnInit() {
    this.itemList.getItemList().subscribe(data => this.itemmenulist = data.data);
  }
  /////Add to cart @Sudheer/////
  addItem(item) {

    let count = 0;
    this.addItemList.push({ id: item.id, itemName: item.name, price: item.onedayprice, quantity: 1, totalprice: item.onedayprice * 1 })
    if (this.addItemList.length > 0) {
      for (let i = 0; i < this.addItemList.length; i++) {
        count = count + this.addItemList[i].totalprice;

      }
      this.subAmount = count
    }
  }
  /////Add to remove @Sudheer/////
  removeItemBag(index) {
    let count = 0;
    this.addItemList.splice(index, 1);
    if (this.addItemList.length > 0) {
      for (let i = 0; i < this.addItemList.length; i++) {
        count = count + this.addItemList[i].totalprice;

      }
      this.subAmount = count
    }

  }
  /////incement cart @Sudheer/////
  itemQtyIncr(incr) {
    let count = 0;
    incr.quantity++;
    if (this.addItemList.length > 0) {
      for (let i = 0; i < this.addItemList.length; i++) {
        if (incr.id === this.addItemList[i].id) {
          this.addItemList[i].totalprice = incr.quantity * incr.price;
        }
        count = count + this.addItemList[i].totalprice;

      }
      this.subAmount = count
    }
  }

  placeOrder() {
    this.itemList.cartOrderPlace(this.addItemList,this.subAmount)
      .subscribe(data => this.postdata = data.data,
      error => alert(error), () => console.log("done" + JSON.stringify(this.postdata))
      );
      //this._router.navigate(['orderSumm']);
  }
  /////Decrement  cart @Sudheer/////
  itemQtyDec(dec, index) {
    dec.quantity--;
    let count = 0;
    console.log(dec.quantity);
    if (dec.quantity > 0) {
      if (this.addItemList.length > 0) {

        for (let j = 0; j < this.addItemList.length; j++) {

          if (dec.id === this.addItemList[j].id) {
            console.log(dec.quantity);
            this.addItemList[j].totalprice = dec.quantity * dec.price;
          }

          count = count + this.addItemList[j].totalprice;
        }
        this.subAmount = count;
      }
    } else {
      this.addItemList.splice(index, 1);
      if (this.addItemList.length > 0) {
        for (let j = 0; j < this.addItemList.length; j++) {

          count = count + this.addItemList[j].totalprice;
        }
        this.subAmount = count;
      }
    }
  }

}
