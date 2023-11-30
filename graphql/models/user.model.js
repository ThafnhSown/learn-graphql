const mongoose= require("mongoose");

const Schema = mongoose.Schema
const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  address: {
    street: String, 
    suite: String,
    city: String    
  },
  phone: String
}, {
  versionKey: false
})

module.exports = mongoose.model('User', userSchema)
