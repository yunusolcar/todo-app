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
};

exports.loginUser = async (req, res) => {
     try {
          const {
               mail,
               password
          } = req.body;

          const user = await User.findOne({mail});
          if (user) {
               bcrypt.compare(password, user.password, (err, same) => {
                    if (same) {
                         req.session.userId = user._id;
                         res.status(200).redirect('/');
                    }
               });
          }
     } catch (err) {
          res.status(400).json({
               status: "ERROR",
               err
          })
     }
}

exports.logoutUser = (req, res) => {
     req.session.destroy(() => {
          res.redirect('/');
     })
}