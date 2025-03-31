const express = require("express")

function main() {
    const app = express();
    app.use(express.json());
    app.get("/test", (req, res) => {
        res.send("Hello client")
    })
    app.listen(3000, () => {
        console.log("Notification System server listening on port 3000");
    })
};

main();

