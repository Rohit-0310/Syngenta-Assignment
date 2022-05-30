const mongoose = require("mongoose");

// create the schema for dishes
const disheSchema = new mongoose.Schema({
    name: {type: String, required: true},
    del_time: {type: String, required: true},
    status: {type: String, required: false},
    location: [{type: mongoose.Schema.Types.ObjectId, ref: "location", required: true}],
    restaurant: [{type: mongoose.Schema.Types.ObjectId, ref: "restaurant", required: true}],
    category: [{type: mongoose.Schema.Types.ObjectId, ref: "category", required: true}],
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

//connect the schema to the dishes collection
module.exports = mongoose.model("dishe", disheSchema) //dishes