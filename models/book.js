const mongoose = require("mongoose")
const Schema = mongoose.Schema

let bookSchema = new Schema({
    title: String,
    description: String,
    price: {
        type: Number,
        default: 0
    },
    author: String,
    shop_id: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: String,
        default: null
    }
})

let Book = mongoose.model("Book", bookSchema)

module.exports = Book