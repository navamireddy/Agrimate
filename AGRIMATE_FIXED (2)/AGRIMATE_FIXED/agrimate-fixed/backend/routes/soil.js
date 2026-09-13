const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { moisture, nitrogen, phosphorus } = req.body;

    let fertilizer;

    if (nitrogen < 50) fertilizer = "Use Urea";
    else if (phosphorus < 40) fertilizer = "Use DAP";
    else fertilizer = "Balanced NPK Fertilizer";

    res.json({
        fertilizer: fertilizer,
        irrigation: moisture < 30 ? "Irrigate Now" : "No irrigation needed"
    });
});

module.exports = router;