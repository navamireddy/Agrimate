# 🌱 AgriMate — AI-Powered Smart Agriculture System

> An intelligent agriculture decision-support platform integrating crop disease detection, soil analysis, weather monitoring, market intelligence, and farmer assistance.

---

## 📌 Overview

AgriMate is a smart agriculture platform designed to provide farmers with multiple agricultural insights through a unified system.

Instead of relying on separate tools for weather, crop health, soil information, and market prices, AgriMate brings these capabilities together into a single application.

The platform combines:

- 🌿 Crop disease detection
- 🧪 Soil and nutrient analysis
- 🌤️ Real-time weather information
- 📈 Indian agricultural market intelligence
- 💊 Fertilizer recommendations
- 🤖 AI-powered agricultural assistance
- 🔐 User authentication
- 🎨 Responsive web interface

---

## ✨ Key Features

### 🌿 1. Crop Disease Detection

The system accepts plant images through the web interface and provides a disease diagnosis along with supporting information.

The current implementation provides:

- Disease name
- Confidence information
- Symptoms
- Suggested solution
- Prevention guidance
- Severity information
- Image validation

> **Note:** The current repository version uses a heuristic-based disease selection mechanism. A trained computer-vision model or specialized plant-disease API can be integrated as a future production upgrade.

### 🧪 2. Soil Analysis

AgriMate provides soil-related analysis using agricultural parameters such as:

- Nitrogen (N)
- Phosphorus (P)
- Potassium (K)
- Soil-related information

The backend processes the available soil parameters and provides corresponding agricultural guidance.

### 🌤️ 3. Real-Time Weather Monitoring

AgriMate integrates the **OpenWeatherMap API** to retrieve live weather information, including:

- City
- Country
- Temperature
- Feels-like temperature
- Humidity
- Wind information
- Atmospheric pressure
- Weather description

The API key is configured through environment variables.

### 📈 4. Agricultural Market Intelligence

The market module provides crop-price information based on Indian Minimum Support Price (MSP) data.

Features include:

- MSP-based crop prices
- Support for 12 crops
- Seasonal information
- Price trends
- Smart suggestions
- Custom crop search
- Estimated price variation

The current implementation applies a small daily variation to the base MSP values to simulate realistic price fluctuations.

### 💊 5. Fertilizer & Agricultural Recommendations

The platform uses available agricultural information to provide recommendations related to crop and soil conditions, moving beyond raw data display to support farmer decision-making.

### 🤖 6. AI Agricultural Assistant

AgriMate includes an AI-based agricultural assistant supported by a knowledge base.

The project contains components for:

- Agricultural knowledge retrieval
- AI-based responses
- Knowledge-base construction
- Bot testing

Relevant files include:

```text
ai_bot.py
ai_bot_runner.py
build_agri_db.py
test_agri_bot.py
knowledge_base/
```

---

## 🏗️ System Architecture

The overall architecture of AgriMate consists of a React-based frontend, an Express.js backend, external APIs, database services, agricultural analysis modules, and the AI agricultural assistant.

```text
                         FARMER
                            │
                            ▼
                 ┌────────────────────┐
                 │   React Frontend   │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │   Express Backend  │
                 └─────────┬──────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      Weather           Market           Soil
        API              Data           Analysis
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Disease Module  │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ AI Assistant /  │
                  │ Knowledge Base  │
                  └────────┬────────┘
                           │
                           ▼
                AGRICULTURAL INSIGHTS
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js |
| API Framework | Express.js |
| Database | MongoDB |
| Database ODM | Mongoose |
| Authentication | JWT |
| Weather API | OpenWeatherMap |
| AI / Knowledge Base | Python |
| Styling | CSS |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```text
agrimate/
│
├── backend/
│   ├── .env.example
│   ├── server.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   └── routes/
│       ├── auth.js
│       ├── weather.js
│       ├── market.js
│       ├── disease.js
│       └── soil.js
│
├── frontend/
│   └── agrimate-frontend/
│       └── src/
│           ├── pages/
│           │   ├── Login.js
│           │   ├── Signup.js
│           │   ├── Weather.js
│           │   ├── Market.js
│           │   └── DiseaseDetection.js
│           │
│           └── styles/
│               └── global.css
│
├── knowledge_base/
│
├── ai_bot.py
├── ai_bot_runner.py
├── build_agri_db.py
├── test_agri_bot.py
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/navamireddy/Agrimate.git
cd Agrimate
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
WEATHER_KEY=your_openweathermap_api_key
```

Start the backend:

```bash
node server.js
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend/agrimate-frontend
npm install
npm start
```

The frontend runs locally and communicates with the Express backend.

---

## 🔐 Environment Variables

For security, API keys, database credentials, and authentication secrets are not included in the repository.

Use `backend/.env.example` as a template for creating your local `.env` file.

**Never commit your `.env` file or API keys to GitHub.**

---

## 🔬 Current Development Status

| Module | Status |
|---|---|
| User Authentication | ✅ Implemented |
| Login / Signup | ✅ Implemented |
| Weather Integration | ✅ Implemented |
| Market Intelligence | ✅ Implemented |
| Soil Analysis | ✅ Implemented |
| Disease Detection Interface | ✅ Implemented |
| AI Agricultural Assistant | ✅ Implemented |
| Responsive UI | ✅ Implemented |
| Production-grade Disease ML Model | 🔬 Future Upgrade |

---

## 🚀 Future Enhancements

- Integration of a trained plant-disease classification model (CNN / deep learning)
- Larger and more diverse agricultural datasets
- IoT-based real-time soil sensing (pH, moisture, NPK sensors)
- Automated crop recommendations
- More accurate market-price forecasting
- Satellite and remote-sensing data integration
- Multilingual, voice-based agricultural assistance
- Personalized recommendations based on crop, soil, weather, and market conditions
- Deployment as a scalable cloud application

---

## 🎯 Project Goal

The long-term goal of AgriMate is to develop a unified intelligent agricultural decision-support system capable of combining heterogeneous agricultural information and presenting it in a simple, actionable form for farmers.

```text
Crop Images
     +
Soil Information
     +
Weather Data
     +
Market Information
     +
Agricultural Knowledge
     ↓
Intelligent Agricultural Assistance
```

---

## 🌱 Why AgriMate?

AgriMate brings multiple agricultural services together into one platform rather than treating each agricultural problem as an isolated task. The project demonstrates the integration of:

**AI + Web Development + APIs + Database Systems + Agricultural Data**

into a single smart agriculture application.

---

## 📄 License

This project is developed for academic, research, and educational purposes.

---

## 👩‍💻 Project

**AgriMate** — Developed as an intelligent smart-agriculture system combining web technologies, machine learning/AI components, external APIs, databases, and agricultural knowledge.

GitHub: https://github.com/navamireddy/Agrimate/blob/main/README.md?plain=1
