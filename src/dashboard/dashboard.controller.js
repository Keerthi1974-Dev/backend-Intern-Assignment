const db = require("../db/database");

exports.create = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });

  db.run(
    "INSERT INTO dashboard (title, description) VALUES (?,?)",
    [title, description],
    function () {
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  db.all("SELECT * FROM dashboard", [], (_, rows) =>
    res.status(200).json(rows)
  );
};

exports.update = (req, res) => {
  db.run(
    "UPDATE dashboard SET title=?, description=? WHERE id=?",
    [req.body.title, req.body.description, req.params.id],
    function () {
      res.json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM dashboard WHERE id=?",
    [req.params.id],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};
