const uuid = require("uuid");
const OrderStatus = {
    CREATED: 0,
    PROCESSING: 1,
    SHIPPED: 2,
    DELIVERED: 3,
    CANCELED: 4,
};

const PaymentStatus = {
    PENDING: "pending",
    PAID: "paid",
    FAILED: "failed",
};

class Order {
    /** @type {string} */
    id;
    /** @type {number} */
    customerId;
    /** @type {import("../types").OrderItem[]} */
    items;
    /** @type {number} */
    totalPrice;
    /** @type {OrderStatus} */
    status;
    /** @type {PaymentStatus} */
    paymentStatus;
    /** @type {string} */
    shippingAddress;
    /** @type {Date} */
    createdAt;
    /** @type {Date} */
    updatedAt;

    /**
     * @param {number} customerId - ID do cliente.
     * @param {string} shippingAddress - Endereço de entrega.
     * @param {import("../types").OrderItem[]} items - Lista de itens do pedido.
     */
    constructor(customerId, shippingAddress, items) {
        this.id = uuid.v4(); 
        this.customerId = customerId;
        this.items = [];
        this.totalPrice = this.calculateTotal();
        this.status = OrderStatus.CREATED;
        this.paymentStatus = PaymentStatus.PENDING;
        this.shippingAddress = shippingAddress;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    changeStatus(status) {
        this.status = status;
        this.updatedAt = new Date();
    }

    addItem(item, quantity, price) {
        this.items.push({ item, quantity, price });
        this.calculateTotal();
        this.updatedAt = new Date();
    }

    removeItem(item) {
        this.items = this.items.filter(i => i.item !== item);
        this.calculateTotal();
        this.updatedAt = new Date();
    }

    calculateTotal() {
        this.totalPrice = this.items.reduce((sumAcc, curItem) => sum + item.price * item.quantity, 0)
    }

    markAsPaid() {
        this.paymentStatus = PaymentStatus.PAID;
        this.updatedAt = new Date();
    }

    cancel() {
        this.status = OrderStatus.CANCELED;
        this.updatedAt = new Date();
    }
}

module.exports = Order;
