const {DataTypes, ValidationError} = require('sequelize')
const sequelize = require('../config/seq')
const UserModel = require ('../models/user')

const User = UserModel(sequelize, DataTypes)

exports.allUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll()
    console.log(allUsers)
    res.status(200).json({"success": true, "data": allUsers})
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

exports.singleUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if (!singleUser) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else{
            res.status(200).json({"success": true, "data": singleUser})
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

exports.createUser = async (req,res) => {
    try {
        //nuevo usuario
        const newUser = await User.create(req.body)
        //response
        res.status(201).json({"success": true, "data": newUser})   
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

exports.updateUser = async (req,res) => {
    try {
        //Seleccionamos por id
        const singleUser = await User.findByPk(req.params.id)
        //Si no existe
        if (!singleUser) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else {
            await User.update(req.body,{
                where: {
                    id: req.params.id
                }
            })
        }
        //Re-seleccionamos 
        const updatedUser = await User.findByPk(req.params.id)
        //response con el usuario actualizado
        res.status(200).json({"success": true, "data": updatedUser})
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

exports.deleteUser = async (req,res) => {
    try {
        const singleUser = await User.findByPk(req.params.id)
        if (!singleUser) {
            res.status(400).json({
                "success": false,
                "errors": "Usuario no encontrado"
            })
        }
        else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({"success": true, "data": singleUser})
        }
    } catch (error) {
            res.status(400).json({
                "success": false,
                "errors": "Bd no encontrada"
            })
       
    }
}