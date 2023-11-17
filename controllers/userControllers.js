const User = require("../models/user");

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