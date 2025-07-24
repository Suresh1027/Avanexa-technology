const Task = require('../models/Taskmodel')

exports.createtask = async (req, res) => {
    try {
        const { title, description } = req.body
        if (!title || !description) {
            res.status(400).json({ message: "all feilds are required" })
        }
        const task = new Task({
            title,
            description
        })
        await task.save()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}

exports.gettask = async (req, res) => {
    try {
        const task = await Task.find()
        if (!task) {
            res.status(400).json({ message: "Task not found" })
        }
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}

exports.deletetask = async (req, res) => {
    try {
        const deletetask = await Task.findByIdAndDelete(req.params.id)
        if (!deletetask) {
            res.status(400).json({ message: "task not found" })
        }
        res.status(201).json(deletetask)
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}