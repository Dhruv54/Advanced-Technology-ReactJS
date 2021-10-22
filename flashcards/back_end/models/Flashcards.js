const mongoose = require('mongoose');


const FlashCardSchema = new Schema({
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('flashcard', FlashCardSchema);