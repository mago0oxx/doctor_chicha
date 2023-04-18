const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  lastname: {
    type: String,
  },
  dni: {
    type: Number,
    unique: true,
    minLength: 7,
    maxLength: 10,
  },
  kindOfPerson: {
    type: String,
    enum: ["natural", "juridica"],
    default: "natural",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    ref: "Location",
  },
  telephone: {
    type: String,
    unique: true,
    minLength: 9,
  },
  roll: {
    type: String,
    enum: ["admin", "user", "superAdmin"],
    default: "user",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  userCompra: [
    {
      type: mongoose.Types.ObjectId,
      ref: "userCompraSchema",
    },
  ],
  pagoFactura: {
    type: Array,
  },
  review: {
    type: Array,
    ref: "Review",
  },
  // password: {
  //     type: String,
  //     required: true,
  // },
  favorites: {
    type: Array,
  },

  loading: {
    type: String,
    enum: ["valid", "invalid"],
    default: "invalid",
  },
});
module.exports = mongoose.model("Users", userSchema);
