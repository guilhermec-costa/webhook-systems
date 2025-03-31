const OrderRepository = require("./orderRepository");
const WebhookManager = require("../application/WebhookManager");
const OrderService = require("../application/OrderService")

const SingletonContainer = {
    ["OrderRepository"]: OrderRepository.get(),
    ["WebhookManager"]: WebhookManager.get(),
    ["OrderService"]: OrderService.get(),
}

module.exports = SingletonContainer;
