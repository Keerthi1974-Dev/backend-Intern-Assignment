const db = require("../db/database");

// CREATE Setting
exports.create = (req, res) => {
  const { name, value } = req.body;

  if (!name || value === undefined) {
    return res.status(400).json({ message: "Name and value are required" });
  }

  db.run(
    "INSERT INTO settings (name, value) VALUES (?, ?)",
    [name, value],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to create setting" });
      }
      return res.status(201).json({
        message: "Setting created",
        id: this.lastID
      });
    }
  );
};

// READ all Settings
exports.getAll = (req, res) => {
  db.all("SELECT * FROM settings", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch settings" });
    }
    return res.status(200).json(rows);
  });
};

// UPDATE Setting
exports.update = (req, res) => {
  const { name, value } = req.body;
  const { id } = req.params;

  if (!name || value === undefined) {
    return res.status(400).json({ message: "Name and value are required" });
  }

  db.run(
    "UPDATE settings SET name=?, value=? WHERE id=?",
    [name, value, id],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to update setting" });
      }

      if (this.changes === 0) {
        return res.status(404).json({ message: "Setting not found" });
      }

      return res.status(200).json({ message: "Setting updated successfully" });
    }
  );
};

// DELETE Setting
exports.delete = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM settings WHERE id=?", [id], function (err) {
    if (err) {
      return res.status(500).json({ message: "Failed to delete setting" });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: "Setting not found" });
    }

    return res.status(200).json({ message: "Setting deleted successfully" });
  });
};
