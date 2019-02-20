const mongooose = require('mongoose')

const Schema = mongooose.Schema
const userSchema = new Schema({
    email: String,
    password: String
})

module.exports = mongooose.model('user',userSchema, 'users')