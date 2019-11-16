const express = require('express')
const router = express.Router()
const Task = require ('../models/task')

router.get('/', async (req, res, next) => {
    const taskList = await Task.find({})
    res.json({taskList})
    next()
})

router.get('/:id', async (req, res, next) => {
   const task = await Task.findById(req.params.id)
   res.json(task)
})

router.post('/', async (req, res, next) => {
    const data = new Task(req.body)

    try {
        await data.save()
        res.send({data})
    } catch (err) {
        res.status(500).send(err)
    }
    next()
})

router.patch('/:id', async (req, res, next) => {
    try {
        const editedData = await Task.findByIdAndUpdate(req.params.id, req.body)
        await editedData.save()
        res.json('tarea actualizada')
    } catch (err) {
        res.status(500).send(err)
    }
    next()
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json('tarea eliminada')
    } catch (err) {
        res.status(500).send(err)
    }
    next()
})

module.exports = router