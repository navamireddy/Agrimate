import { useTranslation } from "react-i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card, { StatCard } from "../components/Card";
import { getUser } from "../services/authService";

export default function Home() {
  const navigate = useNavigate();
  const user = getUser();
  const { t, i18n } = useTranslation();

  const greeting = getGreeting(t);

  const QUICK_LINKS = [
    {
      to: "/weather",
      icon: "🌤",
      label: t("checkWeather"),
      desc: t("weatherDesc"),
      accent: "#eef5ee",
    },
    {
      to: "/soil",
      icon: "🪱",
      label: t("soilAnalysis"),
      desc: t("soilDesc"),
      accent: "#f9f4ec",
    },
    {
      to: "/market",
      icon: "📈",
      label: t("marketPrices"),
      desc: t("marketDesc"),
      accent: "#fef9f0",
    },
    {
      to: "/disease",
      icon: "🔬",
      label: t("diseaseDetection"),
      desc: t("diseaseDesc"),
      accent: "#f0f7ee",
    },
  ];

  const TIPS = [
    { icon: "💧", tip: t("tip1") },
    { icon: "🌿", tip: t("tip2") },
    { icon: "🌡️", tip: t("tip3") },
    { icon: "🐛", tip: t("tip4") },
  ];

  const STEPS = [
    {
      num: "1",
      label: t("stepWeather"),
      desc: t("stepWeatherDesc"),
    },
    {
      num: "2",
      label: t("stepSoil"),
      desc: t("stepSoilDesc"),
    },
    {
      num: "3",
      label: t("stepMarket"),
      desc: t("stepMarketDesc"),
    },
    {
      num: "4",
      label: t("stepDisease"),
      desc: t("stepDiseaseDesc"),
    },
  ];

  return (
    <div className="page-enter">
      <Header
  eyebrow={greeting}
  title={t("dashboard")}
  subtitle={t("dashboardOverview")}
>

<select
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  style={{
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer"
  }}
>
  <option value="en">English</option>
  <option value="hi">हिंदी</option>
  <option value="kn">ಕನ್ನಡ</option>
  <option value="te">తెలుగు</option>
  <option value="ta">தமிழ்</option>
  <option value="ml">മലയാളം</option>
</select>

</Header>

      {/* Stats row */}
      <div className="grid-4" style={{ marginBottom: 28 }}>
        <StatCard label={t("modulesActive")} value="4" icon="⬡" accent="green" />
        <StatCard label={t("dataSources")} value="Live" icon="📡" accent="amber" />
        <StatCard label={t("cropsSupported")} value="50+" icon="🌾" accent="earth" />
        <StatCard label={t("detectionSpeed")} value="<2s" icon="⚡" accent="sky" />
      </div>

      {/* Quick action cards */}
      <div style={{ marginBottom: 28 }}>
        <h2 style={styles.sectionTitle}>{t("quickAccess")}</h2>

        <div className="grid-4">
          {QUICK_LINKS.map((link) => (
            <div
              key={link.to}
              style={{ ...styles.quickCard, background: link.accent }}
              onClick={() => navigate(link.to)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(link.to)}
            >
              <span style={styles.quickIcon}>{link.icon}</span>

              <h3 style={styles.quickLabel}>{link.label}</h3>

              <p style={styles.quickDesc}>{link.desc}</p>

              <span style={styles.quickArrow}>{t("go")} →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid-2">
        {/* Farming tips */}
        <Card title={t("farmingTips")} accent="green" icon="💡">
          <div style={styles.tipsList}>
            {TIPS.map((tItem, i) => (
              <div key={i} style={styles.tip}>
                <span style={styles.tipIcon}>{tItem.icon}</span>

                <p style={styles.tipText}>{tItem.tip}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Getting started */}
        <Card title={t("gettingStarted")} accent="amber" icon="🚀">
  <div style={styles.steps}>
    
    <div style={styles.step}>
      <div style={styles.stepNum}>1</div>
      <div>
        <div style={styles.stepLabel}>{t("step1Title")}</div>
        <div style={styles.stepDesc}>{t("step1Desc")}</div>
      </div>
    </div>

    <div style={styles.step}>
      <div style={styles.stepNum}>2</div>
      <div>
        <div style={styles.stepLabel}>{t("step2Title")}</div>
        <div style={styles.stepDesc}>{t("step2Desc")}</div>
      </div>
    </div>

    <div style={styles.step}>
      <div style={styles.stepNum}>3</div>
      <div>
        <div style={styles.stepLabel}>{t("step3Title")}</div>
        <div style={styles.stepDesc}>{t("step3Desc")}</div>
      </div>
    </div>

    <div style={styles.step}>
      <div style={styles.stepNum}>4</div>
      <div>
        <div style={styles.stepLabel}>{t("step4Title")}</div>
        <div style={styles.stepDesc}>{t("step4Desc")}</div>
      </div>
    </div>

  </div>
</Card>
      </div>
    </div>
  );
}

function getGreeting(t) {
  const h = new Date().getHours();

  if (h < 12) return t("goodMorning");
  if (h < 17) return t("goodAfternoon");

  return t("goodEvening");
}

const styles = {
  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20,
    fontWeight: 600,
    color: "var(--forest)",
    marginBottom: 16,
  },

  quickCard: {
    borderRadius: "var(--radius)",
    padding: "24px 22px",
    border: "1.5px solid var(--border)",
    cursor: "pointer",
    transition: "transform 0.18s, box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  quickIcon: {
    fontSize: 28,
    marginBottom: 4,
    display: "block",
  },

  quickLabel: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 16,
    fontWeight: 600,
    color: "var(--forest)",
  },

  quickDesc: {
    fontSize: 12.5,
    color: "var(--stone)",
    lineHeight: 1.5,
  },

  quickArrow: {
    fontSize: 12,
    fontWeight: 600,
    color: "var(--leaf)",
    marginTop: 8,
    display: "block",
  },

  tipsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  tip: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
  },

  tipIcon: {
    fontSize: 18,
    width: 36,
    height: 36,
    background: "var(--mist)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  tipText: {
    fontSize: 13.5,
    color: "var(--charcoal)",
    lineHeight: 1.6,
    paddingTop: 8,
  },

  steps: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  step: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },

  stepNum: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "linear-gradient(135deg, var(--canopy), var(--leaf))",
    color: "white",
    fontSize: 13,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 2,
  },

  stepLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--soil)",
    marginBottom: 2,
  },

  stepDesc: {
    fontSize: 12.5,
    color: "var(--stone)",
    lineHeight: 1.5,
  },
};
<div style={{marginTop:"40px"}}>
  <h2>Ask AgriMate AI 🌱</h2>

  <input 
    type="text"
    id="question"
    placeholder="Ask a farming question..."
    style={{padding:"10px", width:"300px"}}
  />

  <button 
    onClick={async () => {

      const question = document.getElementById("question").value;

      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({question})
      });

      const data = await res.json();

      document.getElementById("answer").innerText = data.reply;

    }}
    style={{marginLeft:"10px", padding:"10px"}}
  >
    Ask
  </button>

  <p id="answer" style={{marginTop:"20px"}}></p>

</div>