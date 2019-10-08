const search = require("../../models/book")

class SearchBook {
    constructor(req) {
        this.query = req
    }

    async all() {
    try {
    let query1 = await search.find(this.query)
    if(query1.length == 0) {
      throw new error("Data Not Found")
    }
    return query1
    } catch(err) {
        throw err
        }
    }
}

module.exports = SearchBook