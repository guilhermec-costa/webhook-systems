const router = require("express").Router();
const { OrderService } = require("../infra/singletonsContainer");

router.get("/list", async (req, res) => {
    const orders = await OrderService.list();
    res.status(200).json({
        data: orders
    });
})

router.post("/create", async (req, res) => {
    const payload = req.body;
    const createdOrder = await OrderService.createOrder({
        customerId: payload.customerId,
        items: payload.items,
        shippingAddress: payload.shippingAddress
    })
    
    res.status(201).json({
        data: createdOrder
    })
})

module.exports = router;
