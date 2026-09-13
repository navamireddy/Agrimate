const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ── Validate required env vars ────────────────────────────────
const REQUIRED_ENV = ["MONGO_URI", "JWT_SECRET"];
const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error(`\n❌  Missing required environment variables: ${missing.join(", ")}`);
  console.error("   Copy .env.example to .env and fill in your values.\n");
  process.exit(1);
}

if (!process.env.WEATHER_KEY) {
  console.warn("⚠️   WEATHER_KEY not set — weather endpoint will not work.");
}

// ── MongoDB ───────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅  MongoDB connected"))
  .catch((err) => {
    console.error("❌  MongoDB connection error:", err.message);
    process.exit(1);
  });

// ── Routes ────────────────────────────────────────────────────
app.use("/api/auth",    require("./routes/auth"));
app.use("/api/weather", require("./routes/weather"));
app.use("/api/soil",    require("./routes/soil"));
app.use("/api/market",  require("./routes/market"));
app.use("/api/disease", require("./routes/disease"));

// ── Health check ──────────────────────────────────────────────
app.get("/api/test", (_req, res) => {
  res.json({ message: "AgriMate backend is running ✅", timestamp: new Date().toISOString() });
});

// ── Global error handler ──────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});
const { spawn } = require("child_process");

app.post("/api/chat", (req, res) => {

  const question = req.body.question;

  console.log("User asked:", question);

  // correct path to python file
  const python = spawn("python", ["../ai_bot_runner.py", question]);

  let result = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error("Python error:", data.toString());
  });

  python.on("close", () => {
    console.log("AI response:", result);
    res.json({ reply: result });
  });

});
// ── Start ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀  AgriMate server running on http://localhost:${PORT}`);
});
