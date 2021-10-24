const { response } = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Dhruv#@v$s$himanshu'

const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');

//  Route:1-->create a new user

router.post("/createuser", [body('name').isLength({ min: 3 }), body('password').isLength({ min: 5 }), body('email').isEmail()],
    async(req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return response.status(400).json({
                erro: error.message
            });
        }
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Enter Valid Credential." })
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            user = await User.create({ name: req.body.name, password: secPass, email: req.body.email });

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            let success=true;
            res.json({
                success,authtoken
            })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Not Responded");
        }
    }
)

//  Route:2-->User Login

router.post("/login", [body('password').isLength({ min: 5 }), body('email').isEmail()],
    async(req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return response.status(400).json({
                erro: error.message
            });
        }
        try {
            const { email, password } = req.body;
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Enter Correct Credential." })
            }
            const passwordcompare = await bcrypt.compare(password, user.password)
            if (!passwordcompare) {
                return res.status(400).json({ error: "Enter Correct Credential." })
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)
            let success=true;
            res.json({
                success,authtoken
            })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Not Responded");
        }
    }
)

//  Route:3-->User Details

router.post("/getuser", fetchuser, async(req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        let success=true;
        res.send(success,user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Not Responded");
    }
})


















module.exports = router;