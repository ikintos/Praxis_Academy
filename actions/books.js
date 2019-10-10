const Book = require("../models/book")
const { isInteger } = require("lodash")
const User = require("../models/user")

const create = ( req ) => {
    let { title, description, price, author } = req.body
    price  = parseInt(price)
    console.log(`Value of price ${price}`)

    if(isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title,
        description,
        price,
        author
    }

    let data = new Book(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await Book.find({})
    .populate([
        {
            path: 'author',
            model: User
        }
    ]).exec()
    console.log(`Result ${query}`)

    return query
}

const getDetail = async (id) => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { title, description, price, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        title,
        description,
        price
    }
    try {
        let query = await Book.findOneAndUpdate({
           _id : id 
        }, data, opts).exec()
        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let deleted = {
            deleted_at: Date.now()
        }
        let query = await Book.findOneAndUpdate({
            _id: id
        },deleted).exec()

        return query
    } catch(err) {
        throw err
    }
}



module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}