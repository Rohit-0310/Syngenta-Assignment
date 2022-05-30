const express = require("express");

const Cart = require("../models/cart.model")

const crudController = require("./crud.Controller")

const router = express.Router();


router.post("", crudController.post(Cart));

// router.get("", crudController.get(Cart))

// get :- get all cart
router.get("/", async(req, res)=> {
    const carts = await Cart.find()
    .populate({
        path: 'dishe',
        select: ['name','del_time']
    }).lean().exec();

    return res.status(200).send({carts});
})


// get :- get all cart
router.get("/:id", async(req, res)=> {
    const cart = await Cart.findById(req.params.id)
    .populate({
        path: 'dishe',
        select: ['name','del_time']
    }).lean().exec();

    return res.status(200).send({cart});
})


// router.get("/:id", crudController.getOne(Cart))
router.patch("/:id", crudController.updateOne(Cart))
router.delete("/:id", crudController.DeleteOne(Cart))



module.exports = router;