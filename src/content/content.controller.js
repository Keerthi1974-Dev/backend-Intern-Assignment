const db = require("../db/database");

// CREATE Content
exports.create = (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: "Title and body are required" });
  }

  db.run(
    "INSERT INTO content (title, body) VALUES (?, ?)",
    [title, body],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to create content" });
      }
      return res.status(201).json({
        message: "Content created",
        id: this.lastID
      });
    }
  );
};

// READ all Content
exports.getAll = (req, res) => {
  db.all("SELECT * FROM content", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch content" });
    }
    return res.status(200).json(rows);
  });
};

// UPDATE Content
exports.update = (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  if (!title || !body) {
    return res.status(400).json({ message: "Title and body are required" });
  }

  db.run(
    "UPDATE content SET title=?, body=? WHERE id=?",
    [title, body, id],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to update content" });
      }

      if (this.changes === 0) {
        return res.status(404).json({ message: "Content not found" });
      }

      return res.status(200).json({ message: "Content updated successfully" });
    }
  );
};

// DELETE Content
exports.delete = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM content WHERE id=?", [id], function (err) {
    if (err) {
      return res.status(500).json({ message: "Failed to delete content" });
    }

    if (this.changes === 0) {
      return res.status(404).json({ message: "Content not found" });
    }

    return res.status(200).json({ message: "Content deleted successfully" });
  });
};
