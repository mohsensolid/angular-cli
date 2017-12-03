import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private clicked:boolean=false;
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open(){
    this.isOpen = true;
    this.clicked = !this.clicked;
  } 
  @HostListener('mouseenter') mouseOver(){
    this.isOpen = true;
  } 
  @HostListener('mouseleave') mouseLeave(){
    
    this.isOpen = this.clicked ? false:true;
  }
  private isOpen = false;
}
