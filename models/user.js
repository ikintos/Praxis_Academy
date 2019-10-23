const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const mongoosePaginate = require("mongoose-paginate")

let userSchema = new Schema ({
    name: String,
    email: String,
    phone: Number,
    password: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})
userSchema.plugin(mongoosePaginate)
let User = mongoose.model("User", userSchema)

module.exports = User