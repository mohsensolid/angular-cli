import { Component, OnInit } from '@angular/core';
import { Ingredinet } from 'app/model/ingredinet';
import { ShopingListService } from 'app/shopping-list/shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items:Ingredinet[]=[ 
    new Ingredinet('مرغ',1),
  new Ingredinet('هویچ',3)];
  selectedItem : Ingredinet = null;
  constructor(private shopingService:ShopingListService) { }

  ngOnInit() {
    this.items = this.shopingService.getitems();
  }
  onCleared(){
    this.selectedItem=null;
  }
  onSelectItem(item:Ingredinet){
      this.selectedItem=item;
  }
}
