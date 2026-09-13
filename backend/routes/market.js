const express = require("express");
const router  = express.Router();

// ── Static price data (realistic Indian MSP/mandi prices in ₹/quintal)
// In production replace with a real commodity API like:
// - data.gov.in (free Indian govt API)
// - Agmarknet API
// - commodity.com API
const MARKET_DATA = {
  wheat:     { base: 2275, unit: "quintal", season: "rabi"   },
  rice:      { base: 2183, unit: "quintal", season: "kharif" },
  maize:     { base: 2090, unit: "quintal", season: "kharif" },
  cotton:    { base: 6620, unit: "quintal", season: "kharif" },
  sugarcane: { base: 315,  unit: "quintal", season: "annual" },
  soybean:   { base: 4600, unit: "quintal", season: "kharif" },
  tomato:    { base: 1800, unit: "quintal", season: "annual" },
  onion:     { base: 2100, unit: "quintal", season: "rabi"   },
  potato:    { base: 1200, unit: "quintal", season: "rabi"   },
  groundnut: { base: 6377, unit: "quintal", season: "kharif" },
  mustard:   { base: 5650, unit: "quintal", season: "rabi"   },
  barley:    { base: 1735, unit: "quintal", season: "rabi"   },
};

function getTrend(cropName) {
  // Deterministic pseudo-random trend based on day of year + crop
  const seed = (new Date().getDay() + cropName.charCodeAt(0)) % 3;
  return ["Increasing", "Stable", "Decreasing"][seed];
}

function getSuggestion(trend, price, crop) {
  if (trend === "Increasing") {
    return `${crop.charAt(0).toUpperCase() + crop.slice(1)} prices are rising. Consider holding stock for 5–7 days for better rates.`;
  }
  if (trend === "Decreasing") {
    return `Prices are softening. Sell within 2–3 days to avoid further loss. Current MSP support: ₹${Math.round(price * 0.92).toLocaleString("en-IN")}/quintal.`;
  }
  return `Market is stable. A good time to sell at current rates or wait for the next price cycle.`;
}

// GET /api/market/:crop
router.get("/:crop", (req, res) => {
  const crop = req.params.crop.toLowerCase().trim();

  const cropData = MARKET_DATA[crop];

  if (!cropData) {
    // For unknown crops, return a reasonable estimate
    const basePrice = 2000 + Math.abs(crop.charCodeAt(0) * 37 % 3000);
    const trend     = getTrend(crop);
    return res.json({
      crop,
      price:      basePrice,
      trend,
      suggestion: getSuggestion(trend, basePrice, crop),
      unit:       "quintal",
      note:       "Estimated price — add this crop to the database for accurate MSP data.",
    });
  }

  // Add small realistic daily variance (±3%)
  const variance  = 1 + (((new Date().getDate() * 7 + crop.charCodeAt(0)) % 7) - 3) / 100;
  const price     = Math.round(cropData.base * variance);
  const trend     = getTrend(crop);

  res.json({
    crop,
    price,
    trend,
    suggestion: getSuggestion(trend, price, crop),
    unit:       cropData.unit,
    season:     cropData.season,
    msp:        cropData.base,
  });
});

module.exports = router;
