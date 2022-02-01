const Activity = require('../models/activity')

const getActivities = async (req, res) => {
    try{
        const activities = await Activity.find({})
        res.status(201).json({activities})
    }catch(error){
        res.status(500).json({ msg: err})
    }
}

const getCategory = async (req, res) =>{
    try{
        const category = 'water'
        const acts = await Activity.find({category})
        res.status(201).json({acts})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

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
//         console.log('error')
//     }
// }

module.exports = {
    getCategory,
    getActivities,
    // addActivity,
    // delActivity,
    // updateActivity
}