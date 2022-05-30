const mongoose = require("mongoose");

// create the schema for carts
const cartSchema = new mongoose.Schema({
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: "dishe", required: true}],
    status: {type: String, required: true}
    
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

//connect the schema to the dishes collection
module.exports = mongoose.model("cart", cartSchema) //carts