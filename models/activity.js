const mongoose = require('mongoose')


const ActSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'activity name needed']
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    category:{
        type: String,
    }
})

module.exports = mongoose.model('Activity', ActSchema);