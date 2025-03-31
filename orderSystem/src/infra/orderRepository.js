/** @typedef {import("../types").OrderRepository } OrderService */

const Order = require("../models/Order");
const DatabaseSingleton = require("./sqliteConfig");

/** @type {OrderRepository} */
class OrderRepository {
    /** @type {OrderRepository} instance - singleton instance */
    static instance;

    static get() {
        if (!OrderRepository.instance) {
            OrderRepository.instance = new OrderRepository();
        }
        return OrderRepository.instance;
    }

    /** @type {DatabaseSingleton} instance - singleton instance */
    #db;

    /**
     * @param {sqlite.Database} db 
     * */
    constructor() {
        this.#db = DatabaseSingleton.get();
    }

    /** @param {Order} order - the order to create */
    createOne(order) {
    }
   
    /** @returns {Order[]} */
    listOrders() {
        const order = new Order();
        return [order];
    }
}

module.exports = OrderRepository

