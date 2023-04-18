const mongoose = require("mongoose");

const categoryProduct = mongoose.Schema({
  
 
  name: {
    type: String,
    unique: true,
  },
 image: {
    type: String,
 },
 
 description : {
    type: String
 }

})

module.exports = mongoose.model("CategoryProduct", categoryProduct)