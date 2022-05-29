const express = require("express");

const Location = require("../models/location.model")

const crudController = require("./crud.Controller")

const router = express.Router();

router.post ("", crudController.post(Location)) //Location
router.get("", crudController.get(Location))
router.get("/:id", crudController.getOne(Location))
router.patch("/:id", crudController.updateOne(Location))
router.delete("/:id", crudController.DeleteOne(Location))

module.exports = router;