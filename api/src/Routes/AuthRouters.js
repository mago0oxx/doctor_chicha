const express = require ("express");
const { controllerAuth, tokenValidator, logOut } = require('../Controller/AuthController');
//const checkJwt = require('../Auth/middleware/middleware')

const router = express.Router();

router.get("/login", (req, res) => {
  controllerAuth(req, res);
}); 

router.get("/callback", (req, res) => {
  tokenValidator(req, res);
});

router.get("/logout", (req, res) => {
  logOut(req, res);
});

module.exports = router;