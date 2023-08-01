import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMAGEAPI } from '../../../Environments/api/api';
import { Order } from 'src/app/core/model/order.model';
@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent {
  // Inputs
  @Input() order!: Order;
  // path urls
  imageUrl = IMAGEAPI;
  // Emitters
  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  /**
   * When the user clicks on close button , the click event is emitted
   */
  onClick(): void {
    this.clickEvent.emit();
  }
}
