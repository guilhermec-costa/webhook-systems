const OrderRepository = require("../infra/orderRepository");

class OrderService {
    /** @type {import('../types').OrderService} instance - singleton instance */
    static instance;

    /** @type {OrderRepository} orderRepo */
    #orderRepository;

    constructor() {
        this.#orderRepository = OrderRepository.get();
    }

    static get() {
        if (OrderService.instance) {
            OrderService.instance = new OrderService();
        }
        return OrderService.instance;
    }

    constructor() { }

    listOrders() {
        this.#orderRepository.createOne
    }
}

module.exports = OrderService
