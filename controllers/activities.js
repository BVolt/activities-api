//Here is the controller for our activities routers. The two for public use
//are get all and get by category.
const Activity = require('../models/activity')

//This function calls our MongoDB model function to return an array of all activities
const getActivities = async (req, res) => {
    try{
        const activities = await Activity.find({})
        res.status(201).json({activities})
    }catch(error){
        res.status(500).json({ msg: err})
    }
}

//This function passes a parameter to the DB model function to return a filtered array of activities
const getCategory = async (req, res) =>{
    try{
        const category = req.params.category
        const activities = await Activity.find({category})
        res.status(201).json({activities})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

// Delete, add, and update activities are commented out because they
// are for development purposes

// const addActivity = async (req, res) => {
//     try{
//         const activities = await Activity.create(req.body)
//         res.status(200).json({activities})
//     }catch(err){
//         console.log(err)
//     }
// }

// const delActivity = async (req, res) => {
//     try{
//         const id = req.params.id
//         const act = await Activity.findByIdAndDelete({_id: id})
//         if(!act){
//             res.status(404).send('not found')
//         }
//     res.status(200).json({success: true, data: act})
//     }catch(err){
//         console.log(err)
//     }

// }

// const updateActivity = async (req, res) => {
//     const actId = req.params.id
//     const newDat = req.body
//     try{
//         const activities = await Activity.findByIdAndUpdate({_id: actId}, req.body,{new: true, runValidators: true})
//         res.status(200).json({activities})
//     }catch(err){
//         console.log(err)
//     }
// }

module.exports = {
    getCategory,
    getActivities,
    // addActivity,
    // delActivity,
    // updateActivity
}