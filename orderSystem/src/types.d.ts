export interface OrderService {
  createOrder(orderData: any): Promise<void>;
  getOrderById(orderId: string): Promise<any>;
  cancelOrder(orderId: string): Promise<void>;
  list(): Promise<Order[]>;
}

export interface OrderRepository {
    list(): Promise<OrderRepository>;
}

