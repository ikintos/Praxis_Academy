const User = require("../../models/user")
const API = require("../../core/action.core")
const jwt = require("jsonwebtoken")


class Detail extends API {
    constructor(){
        super(User)
    }

    async exec(req, res, next){
        try {
            let user_token = req.header("Authorization")
            let user_data = await jwt.verify(user_token, process.env.JWT_SECRET)
             console.log(`User data from token ${user_data.user_id}`)

            let data = await this.detail(user_data.user_id)
            console.log(data)
            return res.status(200).json({
                status:"Success",
                data,
                message: "User Login Data"
            })
        } catch(err){
            return res.status(400).json({
                status:"Error",
                message: err.message
            })
        }
    }
}
module.exports = Detail