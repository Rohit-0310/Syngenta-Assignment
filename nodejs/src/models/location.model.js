const mongoose = require("mongoose");

//:- create the schema for location
const locationSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {
    versionKey:false,
    timestamps: true
})

// :- connect the schema to the locations collection
module.exports = mongoose.model("location", locationSchema) //location