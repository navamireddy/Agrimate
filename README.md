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

# ✨ Key Features

## 🌿 1. Crop Disease Detection

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

---

## 🧪 2. Soil Analysis

AgriMate provides soil-related analysis using agricultural parameters such as:

- Nitrogen (N)
- Phosphorus (P)
- Potassium (K)
- Soil-related information

The backend processes the available soil parameters and provides corresponding agricultural guidance.

---

## 🌤️ 3. Real-Time Weather Monitoring

AgriMate integrates the **OpenWeatherMap API** to retrieve live weather information.

The application provides:

- City
- Country
- Temperature
- Feels-like temperature
- Humidity
- Wind information
- Atmospheric pressure
- Weather description

The API key is configured through environment variables.

---

## 📈 4. Agricultural Market Intelligence

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

---

## 💊 5. Fertilizer & Agricultural Recommendations

The platform uses available agricultural information to provide recommendations related to crop and soil conditions.

The objective is to move beyond displaying raw agricultural data and provide information in a form that can support farmer decision-making.

---

## 🤖 6. AI Agricultural Assistant

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
# 🏗️ System Architecture

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

**Notice the three backticks.** They are important because they tell GitHub:

> "Display this as a diagram/code block."

---

### 2. Technology Stack

Immediately after the architecture section, add:

```markdown
# 🛠️ Technology Stack

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

**Notice the three backticks.** They are important because they tell GitHub:

> "Display this as a diagram/code block."

---

### 2. Technology Stack

Immediately after the architecture section, add:

```markdown
# 🛠️ Technology Stack

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
# 📂 Project Structure

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
│       │
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
