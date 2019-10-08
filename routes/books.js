const express = require('express')
const router = express.Router()
const { create, getAll, getDetail, update, destroy } = require("../actions/books")
const { isString } = require("lodash")


router.post("/", (req, res) => {
    let data = create(req)

    if(isString(data) === true) {
        return res.status(400).json({
            status: "error",
            message: data
        })
    }

    return res.status(200).json({
        status: "success",
        data,
        message: "Book created successfully!"

    })
})

router.get("/", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "success",
        data,
        message: "Get all book data"
    })


})

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await getDetail(id)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Get Book Detail Succesfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let { title, description, price, fresh } = req.body
    let updated_data = {
        title,
        description,
        price,
        fresh
    }
    try {
        let data = await update(id, updated_data)

        return res.status(200).json({
            status: "Success",
            data,
            message: "Book data Updated Successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await destroy(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "Book data deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})


module.exports = router
