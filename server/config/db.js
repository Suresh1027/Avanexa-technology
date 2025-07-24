const mongoose = require('mongoose')
require('dotenv').config()
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MongoDb)
        console.log("Mongodb connected successfully");

    } catch (error) {
        console.log("mongodb connection error", error);
    }
}
module.exports = connectdb

