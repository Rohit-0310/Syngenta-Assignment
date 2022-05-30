const express = require("express");

const Dishe = require("../models/dishe.model")

const crudController = require("./crud.Controller")

const router = express.Router();


router.post("", crudController.post(Dishe));

// router.get("", crudController.get(Dishe))

// get :- get all dishe

router.get("/", async(req, res)=> {
    const dishes = await Dishe.find()
    .populate({
        path:'location',
        select:"name"
    }).populate({
        path:'category',
        select:"name"
    }).populate({
        path:'restaurant',
        select:"name"
    }).lean().exec();

    return res.status(200).send({dishes});
})

// get :- get one dishe


router.get("/:id", async(req, res)=> {
    const dishe = await Dishe.findById(req.params.id)
    .populate({
        path:'location',
        select:"name"
    }).populate({
        path:'category',
        select:"name"
    }).populate({
        path:'restaurant',
        select:"name"
    }).lean().exec();

    return res.status(200).send({dishe});
})
// router.get("/:id", crudController.getOne(Dishe))
router.patch("/:id", crudController.updateOne(Dishe))
router.delete("/:id", crudController.DeleteOne(Dishe))



module.exports = router;