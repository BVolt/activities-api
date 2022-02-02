const connect = require('./database/dbConnect')
const Activity = require('./models/activity')
const activities = require('./activities.json')
require('dotenv').config()

const populate = async() =>{
    try{
        await connect(process.env.MONGO)
        await Activity.deleteMany()
        await Activity.create(activities)
        console.log('oh yea')
        process.exit(0)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

populate()