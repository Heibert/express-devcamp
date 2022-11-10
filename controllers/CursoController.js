const {DataTypes, ValidationError} = require('sequelize')
const sequelize = require('../config/seq')
const CursoModel = require ('../models/courses')

const Curso = CursoModel(sequelize, DataTypes)

exports.allCursos = async (req, res) => {
    try {
        const allCursos = await Curso.findAll()
    console.log(allCursos)
    res.status(200).json({"success": true, "data": allCursos})
    } catch (error) {
        if (error instanceof ValidationError) {
            const msg_errores=error.errors.map(errorItem=>
                errorItem.message
            )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
        }
    }

    }

exports.singleCurso = async (req, res) => {
    try {
        const singleCurso = await Curso.findByPk(req.params.id)
        if (!singleCurso) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else{
            res.status(200).json({"success": true, "data": singleCurso})
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            const msg_errores=error.errors.map(errorItem=>
                errorItem.message
            )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
        }
    }
}

exports.createCurso = async (req,res) => {
    try {
        //nuevo usuario
        const newCurso = await Curso.create(req.body)
        //response
        res.status(201).json({"success": true, "data": newCurso})   
    } catch (error) {
        if (error instanceof ValidationError) {
            const msg_errores=error.errors.map(errorItem=>
                errorItem.message
            )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
        }
}
}

exports.updateCurso = async (req,res) => {
    try {
        //Seleccionamos por id
        const singleCurso = await Curso.findByPk(req.params.id)
        //Si no existe
        if (!singleCurso) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else {
            await Curso.update(req.body,{
                where: {
                    id: req.params.id
                }
            })
        }
        //Re-seleccionamos 
        const updatedCurso = await Curso.findByPk(req.params.id)
        //response con el usuario actualizado
        res.status(200).json({"success": true, "data": updatedCurso})
    } catch (error) {
        if (error instanceof ValidationError) {
            const msg_errores=error.errors.map(errorItem=>
                errorItem.message
            )
            res.status(422).json({
                "success": false,
                "errors": msg_errores
            })
        }
        else{
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
        }
    }
}

exports.deleteCurso = async (req,res) => {
    try {
        const singleCurso = await Curso.findByPk(req.params.id)
        if (!singleCurso) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else {
            await Curso.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({"success": true, "data": singleCurso})
        }
    } catch (error) {
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
       
    }
}