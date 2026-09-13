import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../components/Header';
import Card from '../components/Card';
import { getMarketPrice, COMMON_CROPS } from '../services/marketService';

function TrendBadge({ trend, t }) {

  const map = {
    Increasing: { icon: '↑', color: '#27ae60', bg: '#eafaea', label: t("increasing") },
    Decreasing: { icon: '↓', color: '#c0392b', bg: '#fdecea', label: t("decreasing") },
    Stable: { icon: '→', color: '#e67e22', bg: '#fef9ec', label: t("stable") }
  };

  const tr = map[trend] || map.Stable;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 12px',
      borderRadius: 20,
      background: tr.bg,
      color: tr.color,
      fontSize: 13,
      fontWeight: 700
    }}>
      {tr.icon} {tr.label}
    </span>
  );
}

export default function Market() {

  const { t } = useTranslation();

  const [selectedCrop, setSelectedCrop] = useState('');
  const [customCrop, setCustomCrop] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  const fetchPrice = async (cropName) => {

    const name = cropName || customCrop;
    if (!name) return;

    setError('');
    setLoading(true);
    setData(null);

    try {

      const result = await getMarketPrice(name);
      setData(result);

      setHistory(prev => {
        const entry = {
          crop: name,
          price: result.price,
          trend: result.trend,
          time: new Date().toLocaleTimeString()
        };

        return [entry, ...prev.filter(h => h.crop !== name)].slice(0, 5);
      });

    } catch (err) {

      setError(
        err.response?.data?.error ||
        t("analysisError")
      );

    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="page-enter">

      <Header
        eyebrow={t("marketIntelligence")}
        title={t("cropMarketPrices")}
        subtitle={t("marketSubtitle")}
      />

      <div className="grid-2" style={{ alignItems: 'start', gap: 24 }}>

        {/* LEFT SIDE */}

        <div>

          <Card title={t("selectCrop")} icon="🌾" accent="amber" style={{ marginBottom: 20 }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>

              {COMMON_CROPS.map((crop) => (

                <button
                  key={crop.value}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '12px 8px',
                    borderRadius: 10,
                    gap: 4,
                    cursor: 'pointer',
                    border: selectedCrop === crop.value ? '1.5px solid var(--forest)' : '1.5px solid var(--border)',
                    background: selectedCrop === crop.value ? 'var(--forest)' : 'var(--parchment)',
                    color: selectedCrop === crop.value ? 'white' : 'inherit',
                    transition: 'all 0.18s'
                  }}
                  onClick={() => {
                    setSelectedCrop(crop.value);
                    setCustomCrop('');
                    fetchPrice(crop.value);
                  }}
                >

                  <span style={{ fontSize: 22 }}>
                    {crop.emoji}
                  </span>

                  <span style={{ fontSize: 11, fontWeight: 500 }}>
                    {crop.name}
                  </span>

                </button>

              ))}

            </div>

          </Card>


          <Card title={t("customCrop")} icon="🔎">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customCrop.trim()) {
                  setSelectedCrop('');
                  fetchPrice(customCrop.trim());
                }
              }}
              style={{ display: 'flex', gap: 10 }}
            >

              <input
                type="text"
                className="form-input"
                placeholder={t("typeCropName")}
                value={customCrop}
                onChange={(e) => setCustomCrop(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-secondary"
                disabled={loading || !customCrop.trim()}
              >
                {t("search")}
              </button>

            </form>

          </Card>

        </div>


        {/* RIGHT SIDE */}

        <div>

          {error &&
            <div className="alert alert--error" style={{ marginBottom: 18 }}>
              ⚠ {error}
            </div>
          }

          {loading && (
            <Card>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '40px',
                gap: 12
              }}>
                <span className="spinner spinner--dark" />
                <p style={{ fontSize: 14, color: 'var(--stone)' }}>
                  {t("fetchingMarket")}
                </p>
              </div>
            </Card>
          )}


          {data && !loading && (

            <Card accent="earth" style={{ marginBottom: 20 }}>

              <div style={{ marginBottom: 20 }}>

                <div style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: 'var(--stone)',
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  marginBottom: 8
                }}>

                  {COMMON_CROPS.find(c => c.value === data.crop)?.emoji || '🌾'} {data.crop?.toUpperCase()}

                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>

                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 44,
                    fontWeight: 700,
                    color: 'var(--forest)',
                    lineHeight: 1
                  }}>
                    ₹{data.price?.toLocaleString('en-IN')}
                  </span>

                  <span style={{ fontSize: 14, color: 'var(--stone)' }}>
                    {t("perQuintal")}
                  </span>

                </div>

                <TrendBadge trend={data.trend} t={t} />

              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '18px 0' }} />

              <div style={{
                background: 'var(--mist)',
                borderRadius: 10,
                padding: '16px',
                border: '1px solid rgba(74,140,71,0.18)',
                marginBottom: 18
              }}>

                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--canopy)',
                  marginBottom: 6,
                  textTransform: 'uppercase'
                }}>
                  💡 {t("marketSuggestion")}
                </div>

                <p style={{ fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.65 }}>
                  {data.suggestion}
                </p>

                {data.note &&
                  <p style={{ fontSize: 12, color: 'var(--stone)', marginTop: 8, fontStyle: 'italic' }}>
                    {data.note}
                  </p>
                }

              </div>

              <div style={{ display: 'flex', gap: 12 }}>

                {[
                  { icon: '📊', label: t("trend"), value: data.trend },
                  { icon: '💰', label: t("msp"), value: data.msp ? `₹${data.msp.toLocaleString('en-IN')}` : 'N/A' },
                  { icon: '📅', label: t("updated"), value: new Date().toLocaleDateString('en-IN') }
                ].map((m) => (

                  <div key={m.label} style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: 12,
                    background: 'var(--linen)',
                    borderRadius: 8
                  }}>

                    <span style={{ fontSize: 18, marginBottom: 4, display: 'block' }}>
                      {m.icon}
                    </span>

                    <div style={{
                      fontSize: 10.5,
                      color: 'var(--stone)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      marginBottom: 3
                    }}>
                      {m.label}
                    </div>

                    <div style={{ fontSize: 13, fontWeight: 600 }}>
                      {m.value}
                    </div>

                  </div>

                ))}

              </div>

            </Card>

          )}


          {!data && !loading && !error && (

            <Card>

              <div style={{ textAlign: 'center', padding: '40px 24px' }}>

                <div style={{ fontSize: 48, marginBottom: 14 }}>
                  📈
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  color: 'var(--forest)',
                  marginBottom: 8
                }}>
                  {t("selectCropMessage")}
                </h3>

                <p style={{
                  fontSize: 13,
                  color: 'var(--stone)',
                  lineHeight: 1.6,
                  maxWidth: 300,
                  margin: '0 auto'
                }}>
                  {t("priceDescription")}
                </p>

              </div>

            </Card>

          )}

        </div>

      </div>

    </div>

  );
}
