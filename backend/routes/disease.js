const axios = require("axios")
const express = require("express");
const multer  = require("multer");
const path    = require("path");
const router  = express.Router();

// ── File upload config ────────────────────────────────────────
const storage = multer.memoryStorage(); // keep in memory, no disk writes needed
const upload  = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, PNG, and WEBP images are accepted"));
    }
  },
});

// ── Disease knowledge base ────────────────────────────────────
// In production: replace with a real ML model call, e.g.:
//   - Google Cloud Vision API (Plant Disease detection)
//   - PlantNet API (free)
//   - A trained TensorFlow / PyTorch model
//   - Roboflow hosted model

const DISEASES = [
  {
    disease:    "Leaf Blight (Alternaria Leaf Spot)",
    confidence: 91,
    symptoms:   "Dark brown spots with yellow halos, irregular margins, premature defoliation",
    solution:   "Apply Mancozeb 75% WP @ 2g/L or Iprodione @ 1.5ml/L. Spray at 7–10 day intervals for 3 applications.",
    prevention: "Avoid overhead irrigation. Maintain plant spacing for air circulation. Remove and destroy infected debris. Rotate crops every season.",
    severity:   "Moderate",
  },
  {
    disease:    "Powdery Mildew (Erysiphe spp.)",
    confidence: 88,
    symptoms:   "White powdery coating on leaves and stems, distortion of young shoots, premature leaf drop",
    solution:   "Apply Sulphur 80% WP @ 3g/L or Hexaconazole 5% SC @ 1ml/L. Spray in early morning or evening.",
    prevention: "Improve air circulation. Avoid excess nitrogen fertilization. Use resistant varieties when available.",
    severity:   "Moderate",
  },
  {
    disease:    "Bacterial Leaf Spot (Xanthomonas spp.)",
    confidence: 84,
    symptoms:   "Water-soaked lesions turning brown/black, angular spots bounded by leaf veins, wilting",
    solution:   "Apply Copper Oxychloride 50% WP @ 3g/L. Remove infected plant parts. Apply Streptocycline 90ppm as a spray.",
    prevention: "Use disease-free certified seeds. Avoid working in wet conditions. Disinfect tools between plants.",
    severity:   "High",
  },
  {
    disease:    "Rust (Puccinia spp.)",
    confidence: 93,
    symptoms:   "Orange-red or brown pustules on leaf undersides, yellowing of upper surface, reduced yield",
    solution:   "Apply Propiconazole 25% EC @ 1ml/L or Tebuconazole @ 0.5ml/L. Begin treatment at first sign.",
    prevention: "Plant resistant varieties. Early planting to avoid peak rust season. Monitor weekly during vulnerable growth stages.",
    severity:   "High",
  },
  {
    disease:    "Early Blight (Alternaria solani)",
    confidence: 87,
    symptoms:   "Circular brown spots with concentric rings (target-board pattern), yellowing around lesions",
    solution:   "Apply Chlorothalonil 75% WP @ 2g/L or Azoxystrobin @ 1ml/L. Remove and burn infected leaves.",
    prevention: "Stake plants to keep foliage off soil. Water at base. Mulch around plants. Rotate crops annually.",
    severity:   "Moderate",
  },
  {
    disease:    "Downy Mildew (Plasmopara / Peronospora spp.)",
    confidence: 85,
    symptoms:   "Yellow patches on upper leaf surface, grey-purple downy growth underneath, browning and death",
    solution:   "Apply Metalaxyl-M + Mancozeb @ 2.5g/L or Dimethomorph @ 1g/L. Spray undersides of leaves.",
    prevention: "Avoid dense planting. Remove crop debris post-harvest. Ensure good drainage. Use fungicide-treated seeds.",
    severity:   "High",
  },
  {
    disease:    "Mosaic Virus (CMV / TMV)",
    confidence: 78,
    symptoms:   "Mottled light and dark green pattern, leaf distortion, stunted growth, reduced fruit size",
    solution:   "No chemical cure. Remove and destroy infected plants immediately. Control aphid vectors with Imidacloprid @ 0.3ml/L.",
    prevention: "Use virus-indexed planting material. Control insect vectors. Wash hands before handling plants. Disinfect tools.",
    severity:   "High",
  },
];

// ── Heuristic: pick disease based on image file properties ─────
// This gives different results per image vs always returning one disease.
// For production: replace with an actual ML model.


// ── POST /api/disease ─────────────────────────────────────────
router.post("/", upload.single("image"), async(req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const base64Image = req.file.buffer.toString("base64");

    const geminiResponse = await axios.post(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    contents: [
      {
        parts: [
          {
            text: "Analyze this plant leaf image. Identify the plant disease if present and provide: disease name, symptoms, treatment, and prevention."
          },
          {
            inlineData: {
              mimeType: req.file.mimetype,
              data: base64Image
            }
          }
        ]
      }
    ]
  }
);

const aiText = geminiResponse.data.candidates[0].content.parts[0].text;

const result = {
  disease: "AI Analysis",
  symptoms: aiText,
  solution: "See analysis above",
  prevention: "Maintain healthy crop practices",
  severity: "Unknown"
};
    
    

    res.json(result);

  } catch (err) {
  console.error("FULL ERROR:", err.response?.data || err.message);
  res.status(500).json({ error: "AI analysis failed" });
}
});

// Multer error handler
router.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError || err.message) {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: "Upload failed" });
});

module.exports = router;
