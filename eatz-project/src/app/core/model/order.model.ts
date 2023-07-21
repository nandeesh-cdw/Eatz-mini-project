/**
 * This is the modal class for orders api 
 */
interface OrderMasterData {
  totalOrders: number;
  orders:Array<Order>;
}
interface Order{
  id: string;
  restaurant: string;
  location: string;
  address: address;
  orderDateTime: string;
  deliveryDateTime: string;
  status: string;
  imageId: string;
  price?: Price;
  paymentMode: string;
  orderItems: Array<OrderItems>; // or this -> OrderItems[];
}

interface address{
    from: string;
    to: string;
  
}
interface Price {
  subTotal: number;
  packingCost: number;
  discount: number;
  total: number;
}
interface OrderItems {
  name: string;
  quantity: number;
  costForOne: number;
  itemCost: number;
}

export { Order, Price, OrderItems,OrderMasterData};
