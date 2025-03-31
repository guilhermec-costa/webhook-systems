/** @typedef {import("../types").OrderService} OrderService */
const sqlite = require("node:sqlite");

/** @type {OrderService} */
class OrderRepository {
    /** @type {OrderRepository} instance - singleton instance */
    static instance;

    static get() {
        if (OrderRepository.instance) {
            OrderRepository.instance = new OrderRepository();
        }
        return OrderRepository.instance;
    }

    /* @type {sqlite.DatabaseSync} instance - singleton instance */
    #db;

    /**
     * @param {sqlite.DatabaseSync} db 
     * */
    constructor(db) {
        this.#db = db;
    }

    /** @param {Order} order - the order to create */
    createOne(order) {
    }
   
    /** @returns {Order} */
    listOrders() {
        return [
            new Order()
        ]
    }
}

module.exports = OrderRepository

