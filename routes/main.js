const users = require("./users")
const index = require("./index")
const books = require("./books")
const shops = require("./shop.route")

const route = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/user", users)
    app.use("/shop", shops)
}

module.exports = route