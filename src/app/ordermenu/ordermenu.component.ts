import { Component, OnInit } from '@angular/core';
import {MenuSericeList} from './ordermenu.service.component'
@Component({
  selector: 'app-ordermenu',
  templateUrl: './ordermenu.component.html',
  styleUrls: ['./ordermenu.component.css'],
  providers:[MenuSericeList]
})
export class OrdermenuComponent implements OnInit {
 menulistdata=[];
  constructor(private menuservice:MenuSericeList) { }

  ngOnInit() {
   this.menuservice.getMenu().subscribe(data =>this.menulistdata=data.data);
  }

}
