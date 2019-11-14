const router = require('express').Router()
const controller = require('./controller')

router.get('/melon', controller.getMelon)
router.get('/youtube', controller.getYoutube)

module.exports = router
