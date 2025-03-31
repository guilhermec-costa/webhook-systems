class Webhook {
    id;
    /** @type {string} destination */
    destination;

    trigger;

    constructor(destination, trigger) {
        id = "random id";
        this.destination = destination;
        this.trigger = trigger;
    }
}

modules.export = Order;
