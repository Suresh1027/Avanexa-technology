const express = require('express')
const { gettask, createtask, deletetask } = require('../controllers/Taskcontroller')
const router = express.Router()

router.get("/gettask", gettask)
router.post("/createtask", createtask)
router.delete("/deletetask/:id", deletetask)

module.exports = router;