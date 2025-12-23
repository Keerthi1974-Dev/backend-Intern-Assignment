const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./dashboard.db", (err) => {
  if (err) console.log("DB Error ❌");
  else console.log("SQLite connected ✅");
});

module.exports = db;
