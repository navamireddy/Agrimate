# 🌱 AgriMate — Smart Farming Intelligence Frontend

A beautiful, production-grade React frontend for the AgriMate backend. Built with an **earthy luxury aesthetic** — deep forest greens, warm ambers, and parchment backgrounds — using Playfair Display and DM Sans typography.

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html              # Root HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Sidebar navigation (with active states)
│   │   ├── Header.js           # Page-level header with eyebrow/title/subtitle
│   │   ├── Footer.js           # App footer
│   │   └── Card.js             # Generic card + StatCard variant
│   ├── pages/
│   │   ├── Home.js             # Dashboard with stats, quick links, tips
│   │   ├── Login.js            # Split-panel login page
│   │   ├── Signup.js           # Registration with auto-login
│   │   ├── Weather.js          # City weather with crop recommendations
│   │   ├── SoilAnalysis.js     # NPK input with visual bars and result
│   │   ├── Market.js           # Crop price picker + trend + history
│   │   └── DiseaseDetection.js # Drag-and-drop image upload + AI result
│   ├── services/
│   │   ├── authService.js      # Login, register, token management
│   │   ├── weatherService.js   # GET /api/weather/:city
│   │   ├── soilService.js      # POST /api/soil
│   │   ├── marketService.js    # GET /api/market/:crop
│   │   └── diseaseService.js   # POST /api/disease (multipart)
│   ├── styles/
│   │   ├── global.css          # CSS variables, resets, animations
│   │   └── App.css             # Layout, cards, forms, buttons
│   ├── App.js                  # Router, auth guards, AppLayout
│   └── index.js                # ReactDOM entry point
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- AgriMate backend running on **port 5000**

### Installation

```bash
# Navigate into the frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at **http://localhost:3000**

> The `"proxy": "http://localhost:5000"` in `package.json` automatically forwards all `/api/*` requests to your backend — no CORS issues!

---

## 🔌 API Integration

All backend routes are called via `axios` through the services layer:

| Service             | Method | Endpoint              | What it does                     |
|---------------------|--------|-----------------------|----------------------------------|
| `authService`       | POST   | `/api/auth/register`  | Register a new user              |
| `authService`       | POST   | `/api/auth/login`     | Login and receive JWT token      |
| `weatherService`    | GET    | `/api/weather/:city`  | Fetch temp, humidity, wind       |
| `soilService`       | POST   | `/api/soil`           | Get fertilizer & irrigation advice |
| `marketService`     | GET    | `/api/market/:crop`   | Get crop price, trend, suggestion |
| `diseaseService`    | POST   | `/api/disease`        | Upload image → disease diagnosis |

---

## 🔐 Authentication Flow

1. User registers/logs in → backend returns a **JWT token**
2. Token stored in `localStorage` as `agrimate_token`
3. All protected routes check `isAuthenticated()` before rendering
4. On logout, token is cleared and user is redirected to `/login`

---

## 🎨 Design System

### Colors
- **Forest green** (`#1C3A1A`) — primary sidebar background
- **Canopy** (`#2D5A2B`) — primary action color
- **Amber** (`#D4873A`) — accent highlights and prices
- **Parchment** (`#FAF6EE`) — page background
- **Cream** (`#F4ECD8`) — card backgrounds

### Typography
- **Playfair Display** — headings, prices, display text
- **DM Sans** — body copy, labels, buttons

### Spacing
- Cards: `28px` padding
- Layout: `44px` horizontal, `40px` vertical content padding
- Grid gaps: `16–24px`

---

## 📦 Building for Production

```bash
npm run build
```

Output goes to the `build/` folder — ready to deploy on Vercel, Netlify, or any static host.

> For production, update the API base URL in each service file (replace `proxy` with full backend URL).

---

## 🌾 Features

- ✅ JWT authentication with protected routes
- ✅ Real-time weather data for any city
- ✅ Soil NPK analysis with visual nutrient bars
- ✅ Crop market price tracker with search history
- ✅ Drag-and-drop plant disease image detection
- ✅ Responsive layout with sidebar navigation
- ✅ Soft error handling and loading states throughout
