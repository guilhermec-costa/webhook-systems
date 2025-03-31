class WebhookManager {
    /** @type {WebhookManager} instance - singleton instance */
    static instance;

    /** @type {Map<OrderEvent, EndpointURL[]} */
    #configuredWebhooks;

    static get() {
        if (!WebhookManager.instance) {
            WebhookManager.instance = new WebhookManager();
        }
        return WebhookManager.instance;
    }

    constructor() {}

    /**
     * 
     * @param {*} trigger 
     * @param {*} destinationEndpoint 
     * @returns {{
     *  err?: string;
     *  success: boolean;
     * }}
     */
    registerWebhook(trigger, destinationEndpoint) {
    }
}

module.exports = WebhookManager;
