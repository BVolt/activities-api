// The main file server.js starts our server to handle api requests

const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./database/dbConnect.js');
const activities = require('./routes/activities')
require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use('/api/activities', activities)

//Home Page for feedback
app.get('/', (req, res) =>{
    res.send('activities api')
})

//Start server, connect to DB, listen on port variable 
const port = process.env.PORT || 5000

const startServer =  async() =>{
    try{
        await connect(process.env.MONGO)
        app.listen(port, ()=> console.log(`server listetning on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}


startServer()