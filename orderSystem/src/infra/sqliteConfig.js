const sqlite3 = require("sqlite3").verbose();

class DatabaseSingleton {
    /** @type {DatabaseSingleton} instance - singleton instance */
    static instance;

    static get() {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    constructor() { }
}

module.exports = DatabaseSingleton;
