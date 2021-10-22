const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200);
    res.json({ name: "flashcards", Age: 100 });
})

module.exports = router;