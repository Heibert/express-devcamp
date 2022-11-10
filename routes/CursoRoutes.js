const express = require('express')
const { allCursos, singleCurso, createCurso, updateCurso, deleteCurso } = require('../controllers/CursoController')
const router = express.Router()

router.route('/').get(allCursos).post(createCurso)
router.route('/:id').get(singleCurso).put(updateCurso).delete(deleteCurso)

module.exports = router