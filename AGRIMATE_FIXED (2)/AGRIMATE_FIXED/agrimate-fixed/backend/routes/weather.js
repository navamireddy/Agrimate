const express = require("express");
const axios   = require("axios");
const router  = express.Router();

// GET /api/weather/:city
router.get("/:city", async (req, res) => {
  try {
    if (!process.env.WEATHER_KEY) {
      return res.status(503).json({ error: "Weather service not configured. Add WEATHER_KEY to .env" });
    }

    const city = req.params.city.trim();
    if (!city) return res.status(400).json({ error: "City name is required" });

    const url = `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${encodeURIComponent(city)}` +
      `&appid=${process.env.WEATHER_KEY}` +
      `&units=metric`;

    const response = await axios.get(url, { timeout: 8000 });
    const d = response.data;

    res.json({
      city:        d.name,
      country:     d.sys.country,
      temperature: Math.round(d.main.temp * 10) / 10,
      feels_like:  Math.round(d.main.feels_like * 10) / 10,
      humidity:    d.main.humidity,
      wind:        d.wind.speed,
      description: d.weather[0].description,
      icon:        d.weather[0].icon,
      pressure:    d.main.pressure,
      visibility:  d.visibility,
    });

  } catch (error) {
    if (error.response?.status === 401) {
      return res.status(503).json({ error: "Invalid weather API key. Check your WEATHER_KEY in .env" });
    }
    if (error.response?.status === 404) {
      return res.status(404).json({ error: `City "${req.params.city}" not found. Try a different name.` });
    }
    console.error("Weather fetch error:", error.message);
    res.status(500).json({ error: "Weather fetch failed. Please try again." });
  }
});

module.exports = router;
