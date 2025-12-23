const db = require("../db/database");

exports.create = (req, res) => {
  const { metric, value } = req.body;
  db.run(
    "INSERT INTO analytics (metric, value) VALUES (?,?)",
    [metric, value],
    function () {
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  db.all("SELECT * FROM analytics", [], (_, rows) =>
    res.status(200).json(rows)
  );
};

exports.update = (req, res) => {
  db.run(
    "UPDATE analytics SET metric=?, value=? WHERE id=?",
    [req.body.metric, req.body.value, req.params.id],
    function () {
      res.json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM analytics WHERE id=?",
    [req.params.id],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};
