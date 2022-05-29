const mongoose = require("mongoose");

//create the schema for category
const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {
    versionKey:false,
    timestamps: true
})

//connect the schema to the categorys collection
module.exports = mongoose.model("category", categorySchema) //category