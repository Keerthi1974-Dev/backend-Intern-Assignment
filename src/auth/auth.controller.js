const db = require("../db/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const hash = bcrypt.hashSync(password, 10);

  // ✅ Always create normal user by default
  const role = "user";

  db.run(
    "INSERT INTO users (email, password, role) VALUES (?,?,?)",
    [email, hash, role],
    (err) => {
      if (err) {
        return res.status(400).json({ message: "User already exists" });
      }

      res.status(201).json({
        message: "User created",
        role: role
      });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email=?", [email], (err, user) => {
    if (!user) {
      return res.status(401).json({ message: "Invalid login" });
    }

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Invalid login" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  });
};
