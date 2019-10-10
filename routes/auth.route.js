const express = require('express')
const router = express.Router()
const Register = require("../actions/users/register.action")
const Login = require("../actions/users/login.action")

router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).exec()

        return res.status(201).json({
            status: "Success",
            data,
            message: "Register Successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        let data = await new Login(req).exec()

        return res.status(200).json({
            status: "Success",
            data,
            message: "Login Successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "Error",
            message: err.message
        })
    }
})
module.exports = router