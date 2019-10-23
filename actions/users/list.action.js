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
            let params = {}
            let limit = parseInt(req.query.limit)
            if(!limit) {
                params.limit = 2
            }else {
                params.limit = limit
            }
            let page = parseInt(req.query.page)
            if(!page){
                params.page = 1
            } else {
                params.page = page
            }
            let params2 = {}
            let { name, email } = req.query            
                if (name) {
                    params2.name ={
                        $regex: `${name}`,
                        $options: 'i'
                        }
                    }
                if(email) {
                params2.email = email
                }
                

             let data = await this.list(params, params2)//get function from parent class
            //  console.log(`data ${JSON.stringify(data)}`)
             let meta = {
                 total: data.total,
                 limit: data.limit,
                 page: data.page,
                 pages: data.pages
             }
             data = data.data

             return res.send({
                 code: 200,
                 status: "Success",
                 message: `Get User Data Page ${page}`,
                 data,
                 meta
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