const express = require('express')
const router = express.Router()
const BookModel = require("../models/book")

router.post("/", (req, res) => {
    let { title, description } = req.body
    var insert_data = {
        title,
        description
    }


    let data = new BookModel(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Book created successfully!"
        // message:"Book List"
    })
})
    router.get("/", async (req, res) => {
        let hasil = await BookModel.find({}).exec()

        return res.send({
            status : "Success",
            hasil,
            message : "List Book"
        })
               
        
})

module.exports = router
