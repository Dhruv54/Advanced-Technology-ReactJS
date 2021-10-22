const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000

connectToMongo();
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/flashcards', require('./routes/flashcards'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})