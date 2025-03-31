const express = require("express");
const orderController = require("./api/orderRouter");

function main() {
    const app = express();
    app.use(express.json())
    app.use("/order", orderController);
    app.listen(3001, () => {
        console.log("Order System server listening on port 3001");
    })
}

main();
