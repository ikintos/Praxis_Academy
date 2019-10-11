const express = require("express") // Import express
const router = express.Router()
const moment = require ("moment")
const mongoose = require ('mongoose')
const SendMail = require("../actions/emails/send.action")

router.get('/', (req, res) => {
  db_status = mongoose.connection.readyState
  db_status_name = [ "disconnected", "connected", "connecting", "disconnecting"]

  return res.send({
    name: "Praxis Academy",
    version: "1.0.0",
    server_time: moment().format(),
    database_status: db_status_name[db_status]

  })
})

router.post("/email", async (req, res) => {
  try {
    let data = await new SendMail(req).exec()
    // await new SendMail(
      // to,
      // subject,
      // text,
      // html: ''
    // ).exec()

    return res.status(200).json({
      status: "Success",
      data,
      message: "Send email Successfully!"
    })
  } catch (err){
    return res.status(400).json({
      status: "Error",
      message: err.message
    })
  }
})

module.exports = router