const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.showList)
router.get('/:id', controller.showOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.patch('/hit/:id', controller.vote)
router.delete('/:id', controller.delete)
router.delete('/', controller.multipleDelete)

module.exports = router
