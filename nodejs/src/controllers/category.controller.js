const express = require("express");

const Category = require("../models/category.model")

const crudController = require("./crud.Controller")

const router = express.Router();

router.post ("", crudController.post(Category)) //Category
router.get("", crudController.get(Category))
router.get("/:id", crudController.getOne(Category))
router.patch("/:id", crudController.updateOne(Category))
router.delete("/:id", crudController.DeleteOne(Category))

module.exports = router;