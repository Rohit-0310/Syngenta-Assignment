const mongoose = require("mongoose");

//:- create the schema for restaurant
const restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
}, {
    versionKey:false,
    timestamps: true
})

// :- connect the schema to the restaurants collection
module.exports = mongoose.model("restaurant", restaurantSchema) //restaurant