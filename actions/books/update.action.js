const Book = require("../../models/book")

class UpdateBook {
    constructor(id, req) {
        this.id = id
        this.title = req.body.title,
        this.description = req.body.description,
        this.price = req.body.price,
        this.author = req.body.author
    }

    async exec() {
        try {
            let query = {
                title: this.title,
                description: this.description,
                price: this.price,
                author: this.author
            }

            let query1 = await Book.findByIdAndUpdate({
                _id: this.id
            },
            query,
            {
                new:true
            }).exec()
            
            return query1
        } catch(err) {
            throw err
        }
    }
}

module.exports = UpdateBook