const sqlite3 = require("sqlite3");

class DatabaseSingleton {
    /** @type {DatabaseSingleton} instance - singleton instance */
    static instance;

    /** @type {sqlite3.Database} */
    dbAccess;

    static get() {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }

    constructor() {
        this.dbAccess = new sqlite3.Database("./webhook_system.sqlite", (err) => {
            if (err) {
                console.error("Failed to connect to databse", err);
            } else {
                console.log("Database connected");
            }
        });

        this.dbAccess.exec(`
            CREATE TABLE IF NOT EXISTS _ORDER (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_id INTEGER NOT NULL,
                total_price REAL NOT NULL DEFAULT 0,
                status INTEGER NOT NULL DEFAULT 0,
                payment_status TEXT NOT NULL DEFAULT 'pending',
                shipping_address TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );
        `, (err) => {
            if (err) {
                console.error("❌ Failed to create table _ORDER:", err);
            } else {
                console.log("✅ Table _ORDER created");
            }
        });
    }
}

module.exports = DatabaseSingleton;
