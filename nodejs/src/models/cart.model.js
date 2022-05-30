const mongoose = require("mongoose");

// create the schema for carts
const cartSchema = new mongoose.Schema({
    dishe: [{type: mongoose.Schema.Types.ObjectId, ref: "dishe", required: true}],
    status: {type: String, default:"order accepted" ,required: false},
    
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

//connect the schema to the dishes collection
module.exports = mongoose.model("cart", cartSchema) //carts