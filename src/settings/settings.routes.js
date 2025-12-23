const express = require("express");
const router = express.Router();
const controller = require("./settings.controller");
const auth = require("../middlewares/auth.middleware");

// CREATE
router.post("/", auth, controller.create);

// READ
router.get("/", auth, controller.getAll);

// UPDATE
router.put("/:id", auth, controller.update);

// DELETE
router.delete("/:id", auth, controller.delete);

module.exports = router;
