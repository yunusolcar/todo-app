const User = require("../models/user");
const bcrypt = require("bcrypt");

checkDuplicateMail = async (req, res, next) => {
    try {
        const user = await User.findOne({
            mail: req.body.mail,
        });

        if (user) {
            return res.status(400).send({
                message: "Mail is already in use!",
            });
        }
        next();
    } catch (err) {
        return res.status(500).send({
            message: err.message || "An error occurred while checking duplicate email",
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        await checkDuplicateMail(req, res, async () => {
            const user = await User.create(req.body);
            res.status(201).redirect("/login");
        });
    } catch (err) {
        res.status(400).json({
            status: "failed - user",
            err,
        });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body;

        const user = await User.findOne({
            mail,
        });

        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same) {
                    req.session.userID = user._id;
                    res.status(200).redirect("/");
                } else {
                    res.status(400).redirect("/login");
                }
            });
        } else {
            req.flash("error", "User is not exist!");
            res.status(400).redirect("/login");
        }
    } catch (err) {
        res.status(400).json({
            status: "ERROR",
            err,
        });
    }
};

exports.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
};

exports.getProfile = async (req, res) => {
    const user = await User.findById(req.session.userID);
    res.status(200).render("profile", {
        user,
    });
};