const express = require("express");

const Cart = require("../models/cart.model")

const crudController = require("./crud.Controller")

const router = express.Router();


router.post("", crudController.post(Cart));

router.get("", crudController.get(Cart))

// get :- get all cart
router.get("/carts", async(req, res)=> {
    const carts = await carts.find().populate({
        path: 'dishe',
        // select: 'name'
    }).populate("category").lean().exec();

    return res.status(200).send({carts});
})

router.get("/:id", crudController.getOne(Cart))
router.patch("/:id", crudController.updateOne(Cart))
router.delete("/:id", crudController.DeleteOne(Cart))



module.exports = router;