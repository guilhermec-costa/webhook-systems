const router = require("express").Router();
const deps = require("../infra/singletonsContainer");

console.log(deps)
router.get("/list", (req, res) => {
    const orders = deps.OrderService.listOrders();
    return res.send({
        data: orders
    });
})

module.exports = router;
