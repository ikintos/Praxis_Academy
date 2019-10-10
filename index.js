const express = require('express') // Import express
const app = express()
require("./db")//database connection
const port = process.env.PORT
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

require('./routes/main')(app) //All Route Imported
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})