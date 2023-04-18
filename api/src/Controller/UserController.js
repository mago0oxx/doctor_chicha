const bcryptjs = require("bcryptjs");
const Cars = require("../Models/Cars");
const { find } = require("../Models/Users");
const Users = require("../Models/Users");
const userSchema = require("../Models/Users");
const { validateCreate } = require("../Validators/Users.js");
const { eMail1 } = require("../Nodemailer/Mailer.js");


const routerGetUsers = async (req, res) => {
    try {
      const { dni } = req.query;
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      const users = await userSchema.find();
      if (dni) {
        let userDni = users.filter((user) => user.dni === Number(dni));
        userDni.length
          ? res.status(200).json(userDni)
          : res.status(201).json("Not found");
      } else {
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json(`Error ${error}`);
    }
  };
  
  const routerByidUser = async (req, res) => {
    try {
      const { id } = req.params;
      let user = await userSchema.findById(id);
      // .populate("review", { description: 1, rate: 1, car: 1 })
  
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(`Error ${error}`);
    }
  };

  