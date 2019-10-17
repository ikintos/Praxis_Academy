const Book = require("../../models/book")

class DelBook {
    constructor(id) {
        this.id = id
    }

    async exec(){
        try {
            let deleted = {
                deleted_at: Date.now()
            }
            let query = await Book.findOneAndUpdate({
                _id: this.id
            },deleted).exec()
    
            return query
        } catch(err) {
            throw err
        }
    }
}

module.exports = DelBook