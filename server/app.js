const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
    res.send('hello roshan')
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})