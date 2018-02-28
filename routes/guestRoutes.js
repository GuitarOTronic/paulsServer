const router = require('express').Router()
const Controller = require ('../controllers/guestController.js')
console.log('guest router');

router.post('/', Controller.verifyForm)



module.exports = router
