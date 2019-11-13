const express = require('express') // Import express
const app = express()
const http = require("http").Server(app)
require("./db")//database connection
const io = require("socket.io")(http),
    redis = require("redis"),
    client = redis.createClient()


// const port = process.env.PORT
//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))
app.use(express.static(__dirname))

require('./routes/main')(app) //All Route Imported

app.get("/chat", (req, res, next) => {
    res.sendFile(__dirname + '/views/template.html')
})

//listen ada perubahan
http.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

io.on('connection',(socket) => {
    const subscribe = redis.createClient()
    subscribe.subscribe('pubsub')

    subscribe.on("message", (channel, message)=>{
        socket.send(message)
    })

    socket.on("message", (msg) => {
        client.publish('pubsub', msg)
    })

    socket.on("disconnect", () => {
        subscribe.quit()
    })
})