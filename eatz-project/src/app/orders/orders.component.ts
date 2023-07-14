import { Component, OnInit } from '@angular/core';
import { OrderService } from '../core/services/order.service';
import { Order } from '../core/model/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  isModalOpen = false;
  modalOrder:Order=new Order();
  url="../../assets/images/download.jpeg";
  orders:Order[]=[];
  displayedOrders:Order[] = [];
  itemsPerPage:number =4;
  constructor(private orderService: OrderService){}
  ngOnInit() 
  {
    this.orderService.getOrders().subscribe(response => {
      this.orders = response.orders.map((order:Order) => order);
      this.loadMore();
    });
    
  }
  loadMore() {
    const startIndex = this.displayedOrders.length;
    const endIndex = startIndex + this.itemsPerPage;
    if (startIndex < this.orders.length) {
      this.displayedOrders = this.displayedOrders.concat(this.orders.slice(startIndex, endIndex));
    }
  }
  viewDetails(order:Order) {
    console.log(order);
    this.openModal();
    this.modalOrder=order;
  }
  openModal(){
    this.isModalOpen=true;
  }
  closeModal() {
    this.isModalOpen=false;
  }
}
