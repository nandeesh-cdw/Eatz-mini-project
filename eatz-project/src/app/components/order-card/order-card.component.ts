import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from 'src/app/core/model/order.model';
import { IMAGEAPI } from '../../../Environments/api/api';
@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  // Inputs
  @Input() order!: Order;
  // Outputs
  @Output() clickEvent: EventEmitter<Order> = new EventEmitter<Order>();
  // Constants
  imageUrl: string = IMAGEAPI;

  /**
   * This method is triggered when the user clicks the view button and the order is emitted to the parent component
   */
  onClick(): void {
    this.clickEvent.emit(this.order);
  }
}
