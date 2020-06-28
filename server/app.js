const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 4000
    // const { MONGOURI } = require('./keys')


// mongoose.connect(MONGOURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// mongoose.connection.on('connected', () => {
//         console.log("connected to mongo database")
//     })
//     //fK9c17IIdpMyUFOO

// mongoose.connection.on('error', (err) => {
//     console.log("error connecting", err)
// })

require('./models/user')


app.use(express.json())
app.use(require('./routes/auth'))
const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://Roshan:fK9c17IIdpMyUFOO@cluster0-7xvf3.mongodb.net/<dbname>?retryWrites=true&w=majority'; // mongodb://localhost - will fail

(async function() {
    try {

        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to the mongo database")
            // ... anything

        client.close();
    } catch (e) {
        console.error(e)
    }

})()

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})
