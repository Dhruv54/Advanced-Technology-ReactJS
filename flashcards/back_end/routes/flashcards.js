const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Flashcards = require('../models/Flashcards');
const { body, validationResult } = require('express-validator');




//  Route:1--> Get all the flashcards for a particular user

router.get("/getcards", fetchuser, async(req, res) => {
    try {
        const cards = await Flashcards.find({ user: req.user.id });
        res.json(cards);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Not Responded");
    }
})

//  Route:2--> Add new flashcard for a particular user

router.get("/addcard", fetchuser, [body('question').isLength({ min: 5 }), body('answer').isLength({ min: 5 }), body('tag').isLength({ min: 2 })], async(req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return response.status(400).json({
            erro: error.message
        });
    }
    try {
        const { question, answer, tag } = req.body;
        const newcard = new Flashcards({ question, answer, tag, user: req.user.id });
        const savedcard = await newcard.save()
        res.json(savedcard);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Not Responded");
    }
})


//  Route:3--> Update flashcard for a particular user

router.put("/updatecard/:id", fetchuser, [body('question').isLength({ min: 5 }), body('answer').isLength({ min: 5 }), body('tag').isLength({ min: 2 })], async(req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return response.status(400).json({
            erro: error.message
        });
    }
    try {
        const { question, answer, tag } = req.body;
        const updatedcard = {};
        if (question) { updatedcard.question = question }
        if (answer) { updatedcard.answer = answer }
        if (tag) { updatedcard.tag = tag }

        let card = await Flashcards.findById(req.params.id);
        if (!card) {
            return res.status(404).send("Not Found!!");
        }
        if (card.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!!");
        }
        card = await Flashcards.findByIdAndUpdate(req.params.id, { $set: updatedcard }, { new: true });
        res.json({ updatedcard });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Not Responded!!");
    }
})

//  Route:4--> Delete flashcard for a particular user

router.delete("/deletecard/:id", fetchuser, async(req, res) => {
    try {

        let card = await Flashcards.findById(req.params.id);
        if (!card) {
            return res.status(404).send("Not Found!!");
        }
        if (card.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!!");
        }
        card = await Flashcards.findByIdAndDelete(req.params.id);
        res.json({ "success": "Card has been deleted successfully!!", card: card });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Not Responded!!");
    }
})


























module.exports = router;
module.exports = router;