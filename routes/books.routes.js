const express = require('express')
const router = express.Router();
// const { price } = require("../actions/books/create.action")
const ShowBook = require("../actions/books/show.action")
const CreateBook = require("../actions/books/create.action")
const Book = require("../actions/books/all.action")
const SearchBook = require("../actions/books/search.action")
const UpdateBook = require("../actions/books/update.action")
const DelBook = require("../actions/books/delete.action")

router.get("/search", async (req, res, next) => {
    let { title, description, price, author } = req.query
    console.log(title)
    try{
        let params = {}

        if (title) {
            params.title = title
        }
        if(description) {
            params.description = title
        }
        if(price) {
            params.price = price
        }
        if(author) {
            params.author = author
        }
        
        let data = await new SearchBook(params).all()
        console.log(params)
        return res.status(200).json({
            status:"Success",
            data,
            message:"Search Success"
        })
    }catch(err) {
        return res.status(400).json({
            status:"Error",
            message: err.message
        })
    }
})


router.put("/:id", async (req, res) => {
    try {
        let { id } = req.params    
        let data = await new UpdateBook(id, req).exec()

        return res.status(201).json({
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

router.post("/", async (req, res) => {
    try {
    let data = await new CreateBook(req).exec()


    return res.status(200).json({
        status: "success",
        data,
        message: "Book created successfully!"
            })
    } catch(err) {
        return res.send({
            status: "Error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    try {
        let data = await Book.all()

    return res.status(200).json({
        status: "success",
        data,
        message: "Get all book data"
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
        let data = await new ShowBook(id).exec()
        console.log(`Type of ShowBook is ${typeof ShowBook}`)

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


router.delete('/:id', async (req, res, next) => {
    let { id } = req.params    
    try {
        let data = await new DelBook(id).exec()
        console.log(`Type of DelBook is ${typeof DelBook}`)

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
