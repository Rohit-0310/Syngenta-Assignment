const express = require("express");

const Dishe = require("../models/dishe.model")

const crudController = require("./crud.Controller")

const router = express.Router();


router.post("", crudController.post(Dishe));

router.get("", crudController.get(Dishe))

//get :- get all dishe
// router.get("/dishes", async(req, res)=> {
//     const dishes = await dishes.find().populate({
//         path: 'location',
//         select: 'name'
//     }).populate("category").lean().exec();

//     return res.status(200).send({dishes});
// })

router.get("/:id", crudController.getOne(Dishe))
router.patch("/:id", crudController.updateOne(Dishe))
router.delete("/:id", crudController.DeleteOne(Dishe))



module.exports = router;