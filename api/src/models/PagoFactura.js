const mongoose = require("mongoose");

const pagoFacturaSchema = mongoose.Schema({
  
  id_pay: {
    type: String,
  },
  items: {
    type: Array
  },
  date_approved: {
    type: String
  },
  operation_type: {
    type: String,
  },
  order: {
    type: Array
  },
  payer: {
    type: Array
  },
  status: {
    type: String,
  },
  status_detail: {
    type: String,
  },
  email: {
    type: String
  },
  statusCar: {
    type: String,
    enum: ["delivered", "undelivered"],
    default: "undelivered"
  }

})

module.exports = mongoose.model("PagoFactura", pagoFacturaSchema)