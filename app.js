const express = require('express')
const app = express()
const port = 7000
const userRoute = require('./route/UserRoute'); //to import the user route
const db = require("./config/db") //this calls the db function 
db()
app.use(express.json()); //middleware
app.use('/api/user', userRoute) //middleware to define the user router

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})
// mongodb+srv://TemiRise:<Oyomi2021>@cluster0.bouk2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.listen(port, () => {
  console.log(`listening at http:127.0.0.1:7000`)
})
