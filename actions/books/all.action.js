const BookModel = require("../../models/book")

class Book {
    static async all() {
        try {
            let data = await BookModel.find({}).exec()

            return data
        } catch(err) {
            throw err
        }
    }
}

module.exports = Book