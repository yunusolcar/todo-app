const User = require("../models/user");

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userID);

        if (!user) {
            return res.redirect("/login");
        }
        next();
    } catch (err) {
        return res.status(500).json({
            status: "ERROR",
            error: "An error occurred while authenticating user.",
        });
    }
};
