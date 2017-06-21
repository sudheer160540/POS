import { Component, OnInit } from '@angular/core';
import {CategoryServiceList} from './category.service.component'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryServiceList]
})
export class CategoryComponent implements OnInit {
  catamenulist=[];
  selectedItem=[];
  constructor(private catalistser:CategoryServiceList) { }

  ngOnInit() {
    this.catalistser.getCategoryList().subscribe(data=>this.catamenulist=data.data);
  }
  
  onSelect(item): void {
    this.selectedItem = item.items;
   // console.log("selectedItem"+JSON.stringify(this.selectedItem));
  }

}
