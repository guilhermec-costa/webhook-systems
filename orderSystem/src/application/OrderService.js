/** 
 * @typedef {Object} OrderDTO
 * @property {string} id 
 * @property {import("../types").OrderItem[]} items
 * @property {Date} createdAt 
 * @property {Date} updatedAt
 * @property {number} totalPrice 
 * @property {string} customerId 
 * @property {string} shippingAddress 
*/

const OrderRepository = require("../infra/orderRepository");
const Order = require("../models/Order");

class OrderService {
    /** @type {OrderService} */
    static instance;

    /** @type {OrderRepository} orderRepo */
    #orderRepository;

    constructor() {
        this.#orderRepository = OrderRepository.get();
    }

    static get() {
        if (!OrderService.instance) {
            OrderService.instance = new OrderService();
        }
        return OrderService.instance;
    }

    /** 
     * @param {Order} order 
     * @returns {OrderDTO}
     * */
    static toOrderDTO(order) {
        return {
            id: order.id,
            shippingAddress: order.shippingAddress,
            items: order.items,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            customerId: order.customerId,
            totalPrice: order.totalPrice,
        }
    }

    async list() {
        const orders = await this.#orderRepository.listOrders();
        console.log("Retrieved orders: ", orders);
        return orders.map(OrderService.toOrderDTO);
    }


    /** @param {CreateOrderCommand} orderData */
    async createOrder(orderData) {
        const { items, shippingAddress, customerId } = orderData;
        const id = await this.#orderRepository.createOne(new Order(customerId, shippingAddress, items))
        return id;
    };
}

module.exports = OrderService
