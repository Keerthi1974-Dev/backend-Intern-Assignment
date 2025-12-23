const db = require("../db/database");

exports.create = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ message: "Missing fields" });

  db.run(
    "INSERT INTO leads (name,email) VALUES (?,?)",
    [name, email],
    function () {
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  db.all("SELECT * FROM leads", [], (_, rows) =>
    res.json(rows)
  );
};

exports.update = (req, res) => {
  db.run(
    "UPDATE leads SET name=?, email=? WHERE id=?",
    [req.body.name, req.body.email, req.params.id],
    function () {
      res.json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM leads WHERE id=?",
    [req.params.id],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};
