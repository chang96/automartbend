const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Car = new Schema({
  
   name:{
       type: String,
   },
   description:{
       type:Array,
       default:[]
   },

})

module.exports = mongoose.model('Car', Car)