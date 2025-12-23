const db = require("./database");

// USERS (already there)
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  password TEXT,
  role TEXT
)`);

// DASHBOARD
db.run(`
CREATE TABLE IF NOT EXISTS dashboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT
)`);

// ANALYTICS
db.run(`
CREATE TABLE IF NOT EXISTS analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  metric TEXT,
  value TEXT
)`);

// LEADS (already used)
db.run(`
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
)`);

// SALES
db.run(`
CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product TEXT,
  amount INTEGER
)`);

// CONTENT
db.run(`
CREATE TABLE IF NOT EXISTS content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  body TEXT
)`);

// SETTINGS
db.run(`
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  value TEXT
)`);
