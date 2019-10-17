const User = require("../../models/user")
const API = require("../../core/action.core")

class Search extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
    try {
        let params = {}
        let { name, email, phone } = req.query
        
            if (name) {
                params.name = {
                    $regex: `${name}`,
                    $option: 'i'
                    }
                }
            if(email) {
                params.email = email
                }
            if(phone) {
                params.phone = phone
                }

        let data = await this.search(params)
        console.log(`data ${JSON.stringify(data)}`)

        return res.send({
            code: 200,
            status:"success",
            data
            })
        } catch(err){
            return res.send({
                code: 400,
                status: "Error",
                message: err.message
            })
        }
    }
}
module.exports = Search