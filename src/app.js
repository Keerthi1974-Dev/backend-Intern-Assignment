require("dotenv").config();
const express = require("express");
const app = express();

// DB connection
require("./db/database");

// middleware
app.use(express.json());

// routes
app.use("/auth", require("./auth/auth.routes"));
app.use("/dashboard", require("./dashboard/dashboard.routes"));
app.use("/analytics", require("./analytics/analytics.routes"));
app.use("/leads", require("./leads/leads.routes"));
app.use("/sales", require("./sales/sales.routes"));
app.use("/content", require("./content/content.routes"));
app.use("/settings", require("./settings/settings.routes"));

// base route
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ✅ PRODUCTION-READY PORT HANDLING
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
