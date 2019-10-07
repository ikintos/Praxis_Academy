let mongoose = require("mongoose")
require("dotenv").config()
var host = process.env.HOST //"mongodb://localhost:27017/docker_node"

mongoose.connect(host, {
    'useNewUrlParser' : true
})

mongoose.set('useCreateIndex', true);