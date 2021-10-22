const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/flashcards";

const connectToMongo = () => {
    mongoose.connect(mongoURL, () => { console.log("mongodb connect successfully!!!") })
}
module.exports = connectToMongo;