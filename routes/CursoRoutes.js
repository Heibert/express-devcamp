const express = require('express')
const { allCurso, singleCurso, createCurso, updateCurso, deleteCurso } = require('../controllers/CursoController')
const router = express.Router()

router.route('/').get(allCurso).post(createCurso)
router.route('/:id').get(singleCurso).put(updateCurso).delete(deleteCurso)

module.exports = router