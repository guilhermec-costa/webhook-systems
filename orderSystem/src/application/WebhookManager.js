const { DatabaseSync } = require("node:sqlite");

class WebhookManager {
    /** @type {WebhookManager} instance - singleton instance */
    static instance;

    /** @type {Map<OrderEvent, EndpointURL[]} */
    #configuredWebhooks;

    static get() {
        if (WebhookManager.instance) {
            WebhookManager.instance = new WebhookManager();
        }
        return WebhookManager.instance;
    }

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
        const eventStore = this.#configuredWebhooks.get(trigger);
        const previousConfigured = eventStore.filter((target) => target === destinationEndpoint);
        if (previousConfigured) {
            return {
                err: `"${destinationEndpoint}" is already configured for event of type ${trigger.toString()}`,
                success: false,
            }
        }
        eventStore.push(destinationEndpoint);
        return {
            success: true,
        }
    }
}

module.exports = WebhookManager;
