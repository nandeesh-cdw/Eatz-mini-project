import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order, OrderMasterData } from '../../core/model/order.model';
// import{ Constants} from '../core/constants/constants';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  isModalOpen = false;
  modalOrder!: Order;
  orders: Order[] = [];
  displayedOrders: Order[] = [];
  itemsPerPage: number = 4;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  /**
   * This method is used to get load more orders
   */
  loadMore(): void {
    const startIndex = this.displayedOrders.length;
    const endIndex = startIndex + this.itemsPerPage;
    if (startIndex < this.orders.length) {
      this.displayedOrders = this.displayedOrders.concat(
        this.orders.slice(startIndex, endIndex)
      );
    }
  }

  /**
   *
   * @param order Takes a order as a parameter when the user clicks the view details
   */
  viewDetails(order: Order): void {
    console.log(order);
    this.openModal();
    this.modalOrder = order;
  }

  /**
   * This method is called when the user clicks on the view details button which triggers the modal behaviour
   */
  openModal(): void {
    this.isModalOpen = true;
  }

  /**
   * This method is called when the user clicks on the view details button which triggers the modal behaviour and closes the modal
   */
  closeModal(): void {
    this.isModalOpen = false;
  }

  /**
   * This method is used to get the order details from the api using the order service .
   */
  getOrders(): void {
    this.orderService.getOrders().subscribe((response: OrderMasterData) => {
      this.orders = response.orders;
      this.loadMore();
    });
  }

  /**
   * when the user clicks on view details , this method is called to load the modal with the order details
   * @param order
   */
  onOrderClick(order: Order): void {
    this.modalOrder = order;
    this.openModal();
  }
}
