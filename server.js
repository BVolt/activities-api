const { application } = require('express');
const express = require('express')
const app = express()
const connect = require('./database/dbConnect.js');
const activities = require('./routes/activities')
require('dotenv').config();

app.use(express.json())
app.use('/api/activities', activities)

app.get('/', (req, res) =>{
    res.send('activities api')
})

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