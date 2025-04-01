const express = require("express");
const orderRouter = require("./api/orderRouter");

function main() {
    const app = express();
    app.use(express.json())
    app.use("/order", orderRouter);
    app.listen(3001, () => {
        console.log("Order System server listening on port 3001");
    })
}

main();
