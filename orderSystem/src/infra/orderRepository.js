const Order = require("../models/Order");
const uuid = require("uuid");
const DatabaseSingleton = require("./sqliteConfig");
const { OrderService } = require("./singletonsContainer");

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
    static #db;
   
    /**
     * 
     * @param {any} row 
     * @returns {Order}
     */
    static toAggregate(row) {
        const order = new Order();
        order.id = row.id;
        order.customerId = row.customer_id;
        order.paymentStatus = row.payment_status;
        order.updatedAt = row.updated_at;
        order.createdAt = row.created_at;
        order.status = row.status;
        order.totalPrice = row.total_price;
        order.shippingAddress = row.shipping_address;
        return order;
    }
    /**
     * @param {sqlite.Database} db 
     * */
    constructor() {
        OrderRepository.#db = DatabaseSingleton.get();
    }

    /** @param {Order} order - the order to create 
     * @returns {Promise<string>} id
     * */
    createOne(order) {
        console.log("Creating order: ", order)
        const query = `
            INSERT INTO _ORDER (customer_id, total_price, status, payment_status, shipping_address, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        return new Promise((resolve, reject) => {
            this.accessor().run(query, [
                order.customerId,
                order.totalPrice,
                order.status,
                order.paymentStatus,
                order.shippingAddress,
                order.createdAt.toISOString(),
                order.updatedAt.toISOString()
            ], 
            function (err) {
                    if(err) reject(err);
                    else resolve(this.lastID);
            })
        })
    }

    /**
     * @returns {Promise<Order[]>} orders
     */
    async listOrders() {
        const query = `select * from _ORDER`;
        return new Promise((resolve, reject) => {
            this.accessor().all(query, (err, rows) => {
                if(err) {
                    console.error("Failed to fetch orders", err);
                    reject(err);
                    return;
                }
                const aggregateOrders = rows.map(OrderRepository.toAggregate);
                resolve(aggregateOrders);
            });
        })
    }

    accessor() {
        return OrderRepository.#db.dbAccess;
    }
}

module.exports = OrderRepository

