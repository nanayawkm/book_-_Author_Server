const express = require('express')
const {body} = require('express-validator')
const { listbookController, createbookController,updatebookController,deleteBookController} = require('../controllers/books')
const router = express.Router()


router.get('/book/:id?', listbookController)
router.post('/book', createbookController)
router.put('/book', updatebookController)
router.delete('/book', deleteBookController)


module.exports = router