const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator')

const User = require('../models/User');

router.post("/", [body('name').isLength({ min: 3 }),
        body('password').isLength({ min: 5 }),
        body('email').isEmail()
    ], async(req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "sorry user email already exist" })
            }
            user = await User.create({ name: req.body.name, password: req.body.password, email: req.body.email });
            res.json(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error");
        }
        console.log("haiiii")
    })
    // router.get("/", (req, res) => {
    //     // res.status(200);
    //     res.json({ name: "auth", Age: 100 });
    // })

module.exports = router;