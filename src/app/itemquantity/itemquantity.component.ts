import { Component, OnInit } from '@angular/core';
import { ItemlistComponent } from '../itemlist/itemlist.component';
import { OrderSummery } from '../itemquantity/itemquantity.service.component';
@Component({
  selector: 'app-itemquantity',
  templateUrl: './itemquantity.component.html',
  styleUrls: ['./itemquantity.component.css'],
  providers: [OrderSummery]


})
export class ItemquantityComponent implements OnInit {
  orderList = [];
  viewmoreItems = [];
  constructor(private orderService: OrderSummery) { }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(data => this.orderList = data.data);
  }
  viewItems(items) {
    this.viewmoreItems = items;
  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
}
