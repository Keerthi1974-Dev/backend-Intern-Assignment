const r = require("express").Router();
const c = require("./analytics.controller");
const auth = require("../middlewares/auth.middleware");

r.post("/", auth, c.create);
r.get("/", auth, c.getAll);
r.put("/:id", auth, c.update);
r.delete("/:id", auth, c.delete);

module.exports = r;
