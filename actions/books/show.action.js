const Book = require("../../models/book")

class ShowBook {
    constructor(id) {
        this.id = id
    }

    async exec() {
        try {
            let query  = await Book.findOne({
                _id: this.id
            }).exec()
            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = ShowBook