const router = require("express").Router();
const deps = require("../infra/singletonsContainer");

router.get("/list", (req, res) => {
    res.send("List of orders");
})

module.exports = router;
