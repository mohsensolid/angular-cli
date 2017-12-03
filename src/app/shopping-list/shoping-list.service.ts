import { Ingredinet } from "app/model/ingredinet";
   


export class ShopingListService {
  private items:Ingredinet []=[];
  constructor() { }
  getitems(){
    return this.items;
  }
  deleteItem(item: Ingredinet): void {
    this.items.splice(this.items.indexOf(item),1);
  }
  addItem(item: Ingredinet):void {
    this.items.push(item);
  }
  addItems(items:Ingredinet[]){
    // this.items=items;
    Array.prototype.push.apply(this.items,items);
  }
  editItem(oldItem:Ingredinet,newItem :Ingredinet){
      this.items[this.items.indexOf(oldItem)]=newItem;
  }
}
