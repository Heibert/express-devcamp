const {DataTypes} = require('sequelize')
const sequelize = require('../config/seq')
const CursoModel = require ('../models/courses')

const Curso = CursoModel(sequelize, DataTypes)

exports.allCurso = async (req, res) => {
    const allCurso = await Curso.findAll()
    res.status(200).json({"success": true, "data": allCurso})
}

exports.singleCurso = async (req, res) => {
    const singleCurso = await Curso.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}

exports.createCurso = async (req,res) => {
    const newCurso = await Curso.create(req.body)
    res.status(201).json({"success": true, "data": newCurso})
}

exports.updateCurso = async (req,res) => {
    await Curso.update(req.body,{
        where: {
            id: req.params.id
        }
    })
    const singleCurso = await Curso.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}

exports.deleteCurso = async (req,res) => {
    await Curso.destroy({
        where: {
            id: req.params.id
        }
    })
    const singleCurso = await Curso.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCurso})
}