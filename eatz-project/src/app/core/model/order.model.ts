export class Order {
    id?: string|undefined;
    restaurant?: string;
    location?: string;
    address?: {
      from: string;
      to: string;
    };
    orderDateTime?: string;
    deliveryDateTime?: string;
    status?: string;
    imageId?: string;
    price?: {
      subTotal: number;
      packingCost: number;
      discount: number;
      total: number;
    };
    paymentMode?:string;
    orderItems?: [{
      name: string;
      quantity: number;
      costForOne: number;
      itemCost: number;
    }];
  }
  