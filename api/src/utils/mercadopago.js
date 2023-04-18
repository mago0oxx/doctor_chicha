const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.MERCADOPAO_kEY,
});

module.exports={mercadopago}
