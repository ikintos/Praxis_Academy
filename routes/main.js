const verifyToken = require("../middlewares/verify_token.middleware")
const users = require("./users")
const index = require("./index")
const books = require("./books.routes")
const shops = require("./shop.route")
const auth = require("./auth.route")
const reset = require("./resetPass.route")

const route = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/user", users)
    app.use("/shop", verifyToken(), shops)
    app.use("/auth", auth)
    app.use("/reset", reset)
}

module.exports = route