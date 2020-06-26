const express = require('express')
const app = express()
const PORT = 4000


const customMiddleware = (req, res, next) => {
    console.log('middleware executed')
    next()
}

app.use(customMiddleware)

app.get('/', (req, res) => {
    console.log('home')
    res.send('hello roshan')
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})