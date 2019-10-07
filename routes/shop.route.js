const express = require('express')
const router = express.Router()
const Shop = require("../actions/shop.action")
const ShowShop = require("../actions/shops/show.action")
const CreateShop = require("../actions/shops/create.action")

router.post("/", async (req, res, next) => {
    try {
        let data = await new CreateShop(req).exec()

        return res.status(201).json({
            status: "Success",
            data,
            message: "Shop Created Succesfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    try {
        let data = await Shop.all()

        return res.status(200).json({
            status: "Success",
            data,
            message: "Get All Shop Data"
        })
    } catch(err) {
        return res.status(400).json({
            status:"Error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowShop(id).exec()
        console.log(`Type of ShowShop is ${typeof ShowShop}`)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Get Detail of Shop"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

module.exports = router