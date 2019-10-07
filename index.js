const express = require('express') // Import express
const app = express()
require("./db")//database connection
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

require('./routes/main')(app) //All Route Imported
app.listen(3300, () => {
    console.log('Example app listening on port 3300')
})