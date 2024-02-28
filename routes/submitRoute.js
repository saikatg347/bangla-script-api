const express = require('express')
const router = express.Router()
const { submitCode } = require('../controllers/submitControllers')

router.post('/', submitCode)

module.exports = router
