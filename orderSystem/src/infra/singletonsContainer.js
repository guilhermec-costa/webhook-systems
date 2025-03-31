const OrderRepository = require("./orderRepository");
const WebhookManager = require("../application/WebhookManager");
const OrderService = require("../application/OrderService");
const Database = require("../infra/sqliteConfig");

const SingletonContainer = {
    ["OrderRepository"]: OrderRepository.get(),
    ["WebhookManager"]: WebhookManager.get(),
    ["OrderService"]: OrderService.get(),
    ["Database"]: Database.get(),
}

module.exports = SingletonContainer;
