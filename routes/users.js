const express = require('express')
const router = express.Router()
const {create, getAll, getDetail, update, destroy } = require("../actions/users")
const { check } = require("express-validator")
const jwt = require("jsonwebtoken")
const UserList = require("../actions/users/list.action")
const UserCreate = require("../actions/users/create.action")
const UserUpdate = require("../actions/users/update.action")
const UserShow = require("../actions/users/show.action")
const UserDelete = require("../actions/users/delete.action")
const UserProfile = require("../actions/users/detail.action")
// const UserSearch = require("../actions/users/search.action")

router.post("/", [
    check('name').not().isEmpty(),
    check('email').not().isEmpty(),
    check('password').not().isEmpty().isLength({ min: 8 })
], async (req,res, next) => await new UserCreate().exec(req, res, next))

router.get("/list", async(req, res, next) =>
    await new UserList().exec(req, res, next))

router.get("/my-profile", async(req, res,next) =>
    await new UserProfile().exec(req,res,next))
// router.get("/my-profile", async(req, res) =>{
//     try{
//         let user_token = req.header("Authorization")
//         let user_data = await jwt.verify(user_token, process.env.JWT_SECRET)
//         console.log(`User data from token ${JSON.stringify(user_data)}`)

//         let data = await getDetail(user_data.user_id)

//         return res.status(200).json({
//             status:"Success",
//             data,
//             message: "User Login data"
//         })
//     }catch(err){
//         return res.status(400).json({
//             status:"error",
//             message: err.message
//         })
//     }
// })

router.get("/:id", async (req, res, next) =>
await new UserShow().exec(req, res, next))

router.put("/:id", async (req,res, next) =>
await new UserUpdate().exec(req, res, next))

router.delete("/:id", async(req,res,next)=>
await new UserDelete().exec(req, res, next))

// router.get("/cari", async(req, res, next) =>
// await new UserSearch().exec(req,res,next))

module.exports = router

// router.post("/", async (req, res) => {
//     try {
//         let data = await create(req)

//         return res.status(200).json({
//             status: "success",
//             data,
//             message: "User created succesfully!"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })

// router.get("/", async(req, res) =>{
//     try {
//         let data = await getAll()

//         return res.send({
//             status: "success",
//             data,
//             message: "Get All User Data"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })


// router.get("/:id", async (req, res) => {
//     try {
//         let { id } = req.params
//         let data = await getDetail(id)

//         return res.status(200).json({
//             status: "Success",
//             data,
//             message: "Get User Detail Succesfully!"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "Error",
//             message: err.message
//         })
//     }
// })

// router.put("/:id", async (req, res) => {
//     let { id } = req.params
//     let { name, email, phone, fresh } = req.body
//     let updated_data = {
//         name,
//         email,
//         phone,
//         fresh
//     }
//     try {
//         let data = await update(id, updated_data)

//         return res.status(200).json({
//             status: "Success",
//             data,
//             message: "User data Updated Successfully!"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })

// router.delete("/:id", async (req, res) => {
//     let { id } = req.params

//     try {
//         let data = await destroy(id)

//         return res.status(200).json({
//             status: "success",
//             data,
//             message: "User data deleted successfully!"
//         })
//     } catch(err) {
//         return res.status(400).json({
//             status: "error",
//             message: err.message
//         })
//     }
// })
