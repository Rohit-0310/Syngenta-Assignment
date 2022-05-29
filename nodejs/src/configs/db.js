const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://rohit:rohit@cluster0.uy4ecec.mongodb.net/Swiggy")
}

module.exports = connect