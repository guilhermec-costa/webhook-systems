const OrderStatus = {
    CREATED: 0,
    FINISHED: 1,
};

class Order {
    id;
    status;

    constructor() {
        this.id = 1;
        this.status = OrderStatus.CREATED
    }

    /** @param {OrderStatus} status */
    changeStatus(status) {
        this.status = status;
    }
}

module.exports = Order;
