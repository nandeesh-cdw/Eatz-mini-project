import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  //Inputs 
  @Input() isActive: string = '';
  @Input() label!:string ;
  @Input() activeClass:string='';
  @Input() routerLink:string = '';
  //Click event 
  @Output() clickEvent:EventEmitter<void>=new EventEmitter();

  /**
   * when clicked , an event will be emitted indicating that the link has been clicked
   */
  onClick():void{
    this.clickEvent.emit();
  }
}
