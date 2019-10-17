const User = require("../../models/user")
const API = require("../../core/action.core")

/**
 * This class using inheritance method
 */

 class List extends API {
     constructor(){
         super(User)
     }

     async exec(req, res, next) {
         try {
             let data = await this.list()//get function from parent class
             console.log(`data ${JSON.stringify(data)}`)

             return res.send({
                 code: 200,
                 status: "Success",
                 data
             })
         } catch(err) {
             return res.send({
                 code: 400,
                 status: "Error",
                 message: err.message
             })
         }
     }
 }

 module.exports = List