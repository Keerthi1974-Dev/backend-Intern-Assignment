const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./dashboard.db", (err) => {
  if (err) {
    console.error("DB connection failed ❌", err.message);
    return;
  }
  console.log("Connected to SQLite ✅");
});

db.run(
  "UPDATE users SET role = 'admin' WHERE email = ?",
  ["admin@gmail.com"],
  function (err) {
    if (err) {
      console.error("Update failed ❌", err.message);
    } else {
      console.log(`Admin role set ✅ Rows updated: ${this.changes}`);
    }
    db.close();
  }
);
