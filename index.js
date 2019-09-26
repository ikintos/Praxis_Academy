const express = require("express"); // Import express
const app = express();
const array_sort = require("./task1");
const array_new = require("./task2")
app.use(express.urlencoded({ extended: true}));

app.get("/", (req,res) => {
   //home
     return res.send('Welcome to the jungle');
});

app.get("/task1", (req, res) => {
    let nama = ["Tiara", "Soni", "Joko", "Yono", "Yos", "Tos"];
    console.log("Before", nama);

    let result = array_sort.ascending_test(nama);


    return res.send(result);

});

app.get("/task3", (req, res) => {
    let nama = ["Tiara", "Soni", "Joko", "Yono", "Yos", "Tos"];
    console.log("Before", nama);

    // let result = array_sort.ascending_test(nama);
    // console.log("After", result);
    let result = array_sort.manipulate(nama);
    console.log("After", result);


    return res.send(result)

})

app.get("/task4",(req,res) => {
    let data = ["Tiara", "Soni", "Joko", "Yono", "Yos", "Tos"];
    let input = ["Pawit","Aji","Tri"]
    console.log("Data Lama",data)


    let result = array_new.merge(input,data);
    console.log("after",result);
    
    
    return res.send(result)
})

app.get("/task2", (req, res) => {
    let alpha = ["Tiara", "Soni", "Joko", "Yono", "Yos", "Tos"];
    console.log("Before", nama);

    let result = array_sort.descending_test(nama);
    console.log("After", result);

    return res.send(result)
    
});

//app.get("/array", array_routes);

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});