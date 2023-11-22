const User = require("../models/user");
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
     try {
          const user = await User.create(req.body);
          res.status(201).json({
               status: "success - user",
               user
          });
     } catch (err) {
          res.status(400).json({
               status: "failed - user",
               err
          });
     }
}

exports.loginUser = async (req, res) => {
     try {
          const {
               mail,
               password
          } = req.body;

          const user = await User.findOne({
               mail
          });

          if (user) {
               bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                         res.status(200).send("Login successfully completed");
                    } else {
                         res.status(400).send("Incorrect username & password!");
                    }
               });

          } else {
               res.status(404).send("User not found!")
          }

     } catch (err) {
          res.status(400).json({
               status: "ERROR",
               err
          })
     }
}