const express = require("express"); // Import express
const app = express();
const router = express.Router()
const moment = require ("moment")
const mongoose = requirec ('mongoose')

router.get('/', (req, res) => {
  db_status = mongoose.connection
})

// const array_sort = require("./lib/task1")
//  const kondisi = require("./lib/push");


app.use(express.urlencoded({ extended: true}));

// app.get("/", (req,res) => {
//    //home
//      return res.send('Welcome to the Jungle');
// });

// app.post("/task-4", (req, res) => {
//     let alpha = ["Hendriyono", "Joko", "Tosikin", "Yosh", "Tiara", "Soni"];
//     console.log("Sebelum dipost", alpha)

//     let tambah = req.body.tambah
//     let hasil = alpha.push(tambah)
//     let berhasil = array_sort.ascending_test(hasil)

//       berhasil.forEach(function(element, no) {
//         console.log(no+1 + '.' + element)
//    })

//     return res.send(`sebelum ditambahkan = ${alpha} ,setelah ditambahkan = ${berhasil}`)

// });
// // app.get('/task1', (req, res) => {
// //     let key1 = req.query.key1
// //     let key2 = req.query.key2

// //     let result = kondisi.task1(key1, key2)

// //     return res.send(result)
// // })

// // app.post('/task2', (req, res) => {
// //     let {name, email, password} = req.body
// //     let result = kondisi.task2(name, email, password)

// //     return res.send(result)
// // })

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});