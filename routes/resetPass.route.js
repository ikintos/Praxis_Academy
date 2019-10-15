const express = require('express')
const router = express.Router()
const ForgotPass = require("../actions/resetPass/forgotPass.action")
const ShowPass = require("../actions/resetPass/show.action")
const resetPass = require("../actions/resetPass/resetPass.action")

router.post("/", async(req, res) => {
    try {
        await new ForgotPass(req.body.email).exec()

        return res.send({
            status: 'Success',
            message: 'Reset Password Successfully'
        })
    } catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
}) 
router.get("/:token", async (req,res) => {
    try {
        let data = await new ShowPass({
            token: req.params.token
        }).exec()

        return res.send({
            status: 'Success',
            data
        })
    } catch(err) {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    }
})

router.post("/:token", async(req, res) => {
    try{
        let data = await new resetPass(req.body.password, req.params.token).exec()
        
        return res.send({
            status: 'Success',
            data
        })
    } catch(err){
        return res.status(400).json({
            status:'error',
            message: err.message
        })
    }
})


module.exports = router