const express = require('express')
const { allBootcamp, singleBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/BootcampController')
const router = express.Router()

router.route('/').get(allBootcamp).post(createBootcamp)
router.route('/:id').get(singleBootcamp).put(updateBootcamp).delete(deleteBootcamp)

module.exports = router