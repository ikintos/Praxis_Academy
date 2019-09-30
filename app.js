const express = require("express"); // Import express
const app = express();


router.get('/', (req, res) => {
  db_status = mongoose.connection
})

// const array_sort = require("./lib/task1")
//  const kondisi = require("./lib/push");


app.use(express.urlencoded({ extended: true}));

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});