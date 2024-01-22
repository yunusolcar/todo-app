const User = require("../models/user");

exports.getIndex = async (req, res) => {
    const user = await User.findById(req.session.userID);
    res.status(200).render("index", {
        pageName: "Index",
        user,
    });
};

exports.getRegister = (req, res) => {
    res.status(200).render("register", {
        pageName: "Register",
    });
};

exports.getLogin = (req, res) => {
    res.status(200).render("login", {
        pageName: "Login",
    });
};
