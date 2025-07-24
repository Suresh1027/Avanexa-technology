const express = require('express')
const cors = require('cors')
const connectdb = require('./config/db')
const app = express()
const Taskroutes = require("./routes/Taskroutes")
require('dotenv').config()

app.use(cors())
app.use(express.json())

connectdb()

app.use("/api/task", Taskroutes)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running at Port:${PORT}`);
})