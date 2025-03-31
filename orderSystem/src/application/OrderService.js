/** @typedef {import("./types").OrderService} OrderService */
const OrderRepository = require("../infra/orderRepository");

/** @type {OrderService} */
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

    listOrders() {
        return this.#orderRepository.listOrders();
    }
}

module.exports = OrderService
