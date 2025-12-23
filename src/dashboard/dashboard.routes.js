const express = require("express");
const r = express.Router();

const c = require("./dashboard.controller");
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// everyone logged in
r.get("/", auth, c.getAll);
r.post("/", auth, c.create);

// admin only
r.put("/:id", auth, role(["admin"]), c.update);
r.delete("/:id", auth, role(["admin"]), c.delete);

module.exports = r;
