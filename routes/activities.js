/* Here are the routes that handle the get request. Patch delete and 
post are commented out as they are for development purposes.*/

const express = require('express')
const router = express.Router()
const {
    getCategory,
    getActivities,
    // addActivity,
    // delActivity,
    // updateActivity
} = require('../controllers/activities')

router.route('/:category').get(getCategory)
router.route('/').get(getActivities)
// .post(addActivity)
// router.route('/:id').patch(updateActivity).delete(delActivity)


module.exports = router;