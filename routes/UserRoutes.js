const express = require('express')
const { allUsers, singleUser, createUser, updateUser, deleteUser } = require('../controllers/UserController')
const router = express.Router()

router.route('/').get(allUsers).post(createUser)
router.route('/:id').get(singleUser).put(updateUser).delete(deleteUser)

module.exports = router