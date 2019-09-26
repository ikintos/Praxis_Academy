const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

    return res.send(`The result value is ${c}`)
})

app.post ('/aritmatika', (req, res) => {
    var a, b, c, d, e
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = parseInt(req.body.d)
    e = a + b - c * d

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)

    return res.send(`The result value is ${e}`)
})

app.post ('/percabangan', (req, res) => {
    var angka
    var hasil

    
    angka =parseInt(req.body.angka)
    console.log(typeof angka)
    if (angka%2==0) {
        hasil= "Ini adalah bilangan Genap"
    }else {
        hasil="Ini adalah bilangan Ganjil"
    }
        return res.send(`${hasil}`)
})

app.listen(3300, ()=> {
    console.log('Example app listening on port 3300')
})