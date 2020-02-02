const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../model/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    async (req, res) => {
        const {
            username,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                username
            });
            if (user) {
                return res.status(400).json({
                    msg: "User Already Exists"
                });
            }
            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password.trim(), salt);
            
            user = new User({
                username,
                password:hashedPassword
            });

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

module.exports = router;
