const express = require("express");

const Restaurant = require("../models/restaurant.model")
const Dishe = require("../models/dishe.model")

const crudController = require("./crud.Controller")

const router = express.Router();

router.post ("", crudController.post(Restaurant)) //Restaurant
router.get("", crudController.get(Restaurant))
router.get("/:id", crudController.getOne(Restaurant))
router.patch("/:id", crudController.updateOne(Restaurant))
router.delete("/:id", crudController.DeleteOne(Restaurant))





// get all dishes of a user
router.get("/:id/dishes", async(req, res) =>{
    const dishes = await Dishe.find({name: req.params.id}).lean().exec();
    

    return res.status(200).send({dishes});
})





module.exports = router;