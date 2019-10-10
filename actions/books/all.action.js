const BookModel = require("../../models/book")
const User = require("../../models/user")

class Book {
    static async all() {
        try {
            let data = await BookModel.find({})
            .populate([
                {
                    path: 'author',
                    model: User
                }
            ]).exec()
            console.log(`Result ${data}`)

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = Book