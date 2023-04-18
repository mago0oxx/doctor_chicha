const mongoose = require ("mongoose");

const product = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
      },
      description: {
        type: String,
        required: true,
        // minLength: 3,
        // maxLength: 20
      },
      price: {
        type: Number,
        required: true,
        minLength: 1
   
      },
      quantity: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 1000
      },
     
      category: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15,
      },
      image: {
        type: String,
        require: false,
      },
      sku:{
        type: Number,
        unique: true,
        required: true,
      },
      trademark:{
        type: String,
        require: true,
        minLength: 1,
        maxLength: 30,
      },
      status: {
        type: String,
        enum: ["valid", "invalid"],
        default: "valid",
      },
      active: {
        type: String,
        enum: ["valid", "invalid"],
        default: "valid",
      },
      location: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
      },
      review: {
        type: Array,
        ref: "Review",
      },
      billing: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Billings",
        },

    ]
});
module.exports = mongoose.model("Product", product)