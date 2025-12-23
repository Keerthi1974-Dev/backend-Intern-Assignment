const db = require("../db/database");

exports.create = (req, res) => {
  const { product, amount } = req.body;
  db.run(
    "INSERT INTO sales (product, amount) VALUES (?,?)",
    [product, amount],
    function () {
      res.status(201).json({ id: this.lastID });
    }
  );
};

exports.getAll = (req, res) => {
  db.all("SELECT * FROM sales", [], (_, rows) =>
    res.status(200).json(rows)
  );
};

exports.update = (req, res) => {
  db.run(
    "UPDATE sales SET product=?, amount=? WHERE id=?",
    [req.body.product, req.body.amount, req.params.id],
    function () {
      res.json({ updated: this.changes });
    }
  );
};

exports.delete = (req, res) => {
  db.run(
    "DELETE FROM sales WHERE id=?",
    [req.params.id],
    function () {
      res.json({ deleted: this.changes });
    }
  );
};
