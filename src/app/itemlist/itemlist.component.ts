import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMenuSerive } from './item.service.component';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  providers: [ItemMenuSerive]
})
export class ItemlistComponent implements OnInit {
  itemmenulist = [];
  addItemList = [];
  @Input() selectedItem;
  //@Output() outputevent:EventEmitter<any>=new EventEmitter();
  constructor(private itemList: ItemMenuSerive) { }

  ngOnInit() {
    this.itemList.getItemList().subscribe(data => this.itemmenulist = data.data);
  }
  addItem(item) {
    //this.outputevent.emit('text msg');
    this.addItemList.push({ id: item.id, itemName: item.name, price: item.onedayprice, quantity: 1, totalprice: item.onedayprice * 1 })
    console.log(JSON.stringify(this.addItemList));
  }
  removeItemBag(index) {
    this.addItemList.splice(index,1);
  }
  itemQtyIncr(){

  }
  itemQtyDec(){
    
  }
}
