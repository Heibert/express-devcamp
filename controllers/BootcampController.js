const {DataTypes} = require('sequelize')
const sequelize = require('../config/seq')
const BootcampModel = require ('../models/bootcamps')

const Bootcamp = BootcampModel(sequelize, DataTypes)

exports.allBootcamp = async (req, res) => {
    const allBootcamp = await Bootcamp.findAll()
    console.log(allBootcamp)
    res.status(200).json({"success": true, "data": allBootcamp})
}

exports.singleBootcamp = async (req, res) => {
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleBootcamp})
}

exports.createBootcamp = async (req,res) => {
    const newBootcamp = await Bootcamp.create(req.body)
    res.status(201).json({"success": true, "data": newBootcamp})
}

exports.updateBootcamp = async (req,res) => {
    await Bootcamp.update(req.body,{
        where: {
            id: req.params.id
        }
    })
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleBootcamp})
}

exports.deleteBootcamp = async (req,res) => {
    await Bootcamp.destroy({
        where: {
            id: req.params.id
        }
    })
    const singleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleBootcamp})
}