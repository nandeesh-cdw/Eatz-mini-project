import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() appClickOutside = new EventEmitter<void>();

  // /* The `@HostListener('document:click', ['.target'])` decorator is used to listen for click
  // events on the document. When a click event occurs, the `onClick` method is called with the target
  // element as an argument. */
  // @HostListener('document:click', ['$event.target'])
  // onClick(target: any): void {
  //   const clickedInsideModal = this.elementRef.nativeElement.contains(target);
  //   if (!clickedInsideModal) {
  //     this.appClickOutside.emit();
  //   }
  // }

  /* The  decorator is used to listen for the
  `keydown` event on the document, specifically when the `Escape` key is pressed. When the `Escape`
  key is pressed, the `onEscKeyDown` method is called with the `KeyboardEvent` as an argument.
  Inside the method, the `appClickOutside` event is emitted, indicating that the user has pressed
  the `Escape` key outside of the element associated with this directive. */
  @HostListener('document:keydown.escape', ['$event'])
  onEscKeyDown(event: KeyboardEvent): void {
    this.appClickOutside.emit();
  }

}
