let mongoose = require("mongoose");
var host = "mongodb://localhost:27017/database1"

mongoose.connect(host, {
    'useNewUrlParser' : true
})

mongoose.set('useCreateIndex', true);