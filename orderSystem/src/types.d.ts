export interface OrderService {
  createOrder(orderData: any): Promise<void>;
  getOrderById(orderId: string): Promise<any>;
  cancelOrder(orderId: string): Promise<void>;
}
