const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const {
    getCategory,
    getActivities,
    // addActivity,
    // delActivity,
    // updateActivity
} = require('../controllers/activities')

router.route('/static').get(getActivities)
router.route('/').get(getCategory)
// .post(addActivity)
// router.route('/:id').patch(updateActivity).delete(delActivity)


module.exports = router;