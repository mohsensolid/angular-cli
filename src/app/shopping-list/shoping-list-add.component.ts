import { Component, OnInit, Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Ingredinet } from 'app/model/ingredinet';
import { ShopingListService } from 'app/shopping-list/shoping-list.service';

@Component({
  selector: 'app-shoping-list-add',
  templateUrl: './shoping-list-add.component.html'
})
export class ShopingListAddComponent implements OnInit,OnChanges {
  isAdd = true;
  @Input() item:Ingredinet;
  @Output() clearedItem=new EventEmitter();
  ngOnChanges(changes): void {
    if(changes.item.currentValue==null){
      this.isAdd = true;
    }else{
      this.isAdd = false;
      }
  }

  constructor(private sls:ShopingListService) { }

  ngOnInit() {
  }
  deleteItem(){
    this.sls.deleteItem(this.item);
    this.onClear();
  }
  onClear(){
    this.isAdd=true;
    this.item=null;
    this.clearedItem.emit(null);
  }
  onSubmit(ingredinet:Ingredinet){
    const newIngerdinet = new Ingredinet(ingredinet.name,ingredinet.amount);
      if(!this.isAdd){
          this.sls.editItem(this.item,newIngerdinet);
          this.onClear();
      }else{
        this.item = newIngerdinet;
        this.sls.addItem(newIngerdinet);
      }
  }
}
