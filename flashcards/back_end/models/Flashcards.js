const mongoose = require('mongoose');
const { Schema } = mongoose;

const FlashCardSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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