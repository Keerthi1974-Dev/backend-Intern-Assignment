const router = require("express").Router();
const c = require("./auth.controller");

router.post("/signup", c.signup);
router.post("/login", c.login);

module.exports = router;
