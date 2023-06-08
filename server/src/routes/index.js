const { Router } = require("express");
const postActivity  = require('../Controllers/postActivity')
const getCountries = require('../Controllers/getCountries')
const getActivities = require('../Controllers/getActivities')
const getCountryById = require('../Controllers/getCountryById')

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/:id', getCountryById)

router.post('/activities', postActivity)
router.get('/activities', getActivities)

module.exports = router;
