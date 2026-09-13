import { useTranslation } from "react-i18next";
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { detectDisease } from '../services/diseaseService';

const PHOTO_TIPS = [
  { icon: '📸', key: "tip1" },
  { icon: '🔍', key: "tip2" },
  { icon: '🍃', key: "tip3" },
  { icon: '📱', key: "tip4" },
];

const SEVERITY_COLORS = { Low: '#27ae60', Moderate: '#e67e22', High: '#c0392b' };

export default function DiseaseDetection() {
  const { t } = useTranslation();
  const [file, setFile]         = useState(null);
  const [preview, setPreview]   = useState(null);
  const [data, setData]         = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef();

  const processFile = (f) => {
    if (!f || !f.type.startsWith('image/')) {
      setError('Please upload a valid image (JPG, PNG, or WEBP).');
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setError('Image must be under 10MB.');
      return;
    }
    setFile(f); setError(''); setData(null);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(f);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setError(''); setLoading(true); setData(null);
    try {
      const result = await detectDisease(file);
      setData(result);
    } catch (err) {
      setError(err.response?.data?.error || 'Detection failed. Please try with a clearer image.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null); setPreview(null); setData(null); setError('');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="page-enter">
      <Header
        eyebrow={t("plantHealthAI")}
        title={t("detectDisease")}
        subtitle={t("description")}
      />

      <div className="grid-2" style={{ alignItems: 'start', gap: 24 }}>
        {/* Upload panel */}
        <div>
          <Card title={t("uploadImage")} icon="📷" accent="green" style={{ marginBottom: 20 }}>
            <div
              style={{
                border: `2.5px dashed ${dragOver ? 'var(--leaf)' : 'var(--border)'}`,
                borderRadius: 'var(--radius)', background: dragOver ? 'var(--mist)' : 'var(--parchment)',
                minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: preview ? 'default' : 'pointer', marginBottom: 16, overflow: 'hidden',
                transition: 'all 0.2s',
              }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); processFile(e.dataTransfer.files[0]); }}
              onClick={() => !preview && inputRef.current?.click()}
            >
              <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={(e) => processFile(e.target.files[0])} />

              {preview ? (
                <div style={{ width: '100%', position: 'relative' }}>
                  <img src={preview} alt="Uploaded plant" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '16px 14px 10px', display: 'flex', justifyContent: 'space-between',
                  }}>
                    <span style={{ fontSize: 12, color: 'white', fontWeight: 500 }}>{file?.name}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>{(file?.size / 1024).toFixed(0)} KB</span>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: 30 }}>
                  <div style={{ fontSize: 52, marginBottom: 12, lineHeight: 1 }}>🌿</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--forest)', marginBottom: 6 }}>{t("dropPhoto")}</h3>
                  <p style={{ fontSize: 13, color: 'var(--stone)', marginBottom: 8 }}>{t("browseFiles")}</p>
                  <p style={{ fontSize: 11, color: 'var(--dust)', background: 'var(--linen)', padding: '4px 12px', borderRadius: 20, display: 'inline-block' }}>{t("fileTypes")}</p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              {preview ? (
                <>
                  <button className="btn btn-primary btn--lg" onClick={handleAnalyze} disabled={loading} style={{ flex: 1 }}>
                    {loading ? <><span className="spinner" /> Analyzing…</> :t( " detectDisease")}
                  </button>
                  <button className="btn btn-ghost" onClick={handleReset}>✕ Reset</button>
                </>
              ) : (
                <button className="btn btn-secondary btn--full btn--lg" onClick={() => inputRef.current?.click()}>
                  {t("chooseFile")}
                </button>
              )}
            </div>
            {error && <div className="alert alert--error" style={{ marginTop: 14 }}>⚠ {error}</div>}
          </Card>

          <Card title={t("photoTips")} icon="💡">
            {PHOTO_TIPS.map((tip, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < PHOTO_TIPS.length-1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{tip.icon}</span>
                <span style={{ fontSize: 13, color: 'var(--charcoal)', lineHeight: 1.55 }}>{t(tip.key)}</span>
              </div>
            ))}
          </Card>
        </div>

        {/* Results panel */}
        <div>
          {loading && (
            <Card>
              <div style={{ textAlign: 'center', padding: '48px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--mist)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--leaf)' }}>
                  <span style={{ fontSize: 32 }}>🔬</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--forest)' }}>Analyzing your plant…</h3>
                <p style={{ fontSize: 13.5, color: 'var(--stone)' }}>Examining disease patterns in the image.</p>
              </div>
            </Card>
          )}

          {data && !loading && (
            <div>
              {/* Disease header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'linear-gradient(135deg, var(--forest), #264a24)',
                borderRadius: 'var(--radius)', padding: '22px 24px', marginBottom: 16, color: 'white',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ fontSize: 32, width: 56, height: 56, background: 'rgba(255,255,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🦠</div>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>Detected Disease</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700 }}>{data.disease}</div>
                  </div>
                </div>
                {data.confidence && (
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Confidence</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#E8B84B', fontWeight: 700 }}>{data.confidence}%</div>
                  </div>
                )}
              </div>

              {/* Symptoms */}
              {data.symptoms && (
                <Card icon="👁" style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--stone)', marginBottom: 8 }}>Symptoms</div>
                  <p style={{ fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.7 }}>{data.symptoms}</p>
                </Card>
              )}

              <Card accent="green" icon="💊" style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--leaf)', marginBottom: 8 }}>Treatment Solution</div>
                <p style={{ fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.7 }}>{data.solution}</p>
              </Card>

              <Card accent="earth" icon="🛡️" style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--clay)', marginBottom: 8 }}>Prevention Strategy</div>
                <p style={{ fontSize: 14, color: 'var(--charcoal)', lineHeight: 1.7 }}>{data.prevention}</p>
              </Card>

              {data.severity && (
                <Card icon="📊">
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--forest)', marginBottom: 12 }}>Severity Assessment</div>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                    {['Low', 'Moderate', 'High'].map((s) => (
                      <div key={s} style={{
                        flex: 1, padding: 10, textAlign: 'center', borderRadius: 8,
                        fontSize: 13, fontWeight: 600,
                        background: data.severity === s ? `${SEVERITY_COLORS[s]}22` : 'var(--linen)',
                        color: data.severity === s ? SEVERITY_COLORS[s] : 'var(--stone)',
                        border: data.severity === s ? `1.5px solid ${SEVERITY_COLORS[s]}` : '1.5px solid transparent',
                      }}>{s}</div>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--stone)', fontStyle: 'italic' }}>
                    Based on visual symptoms — consult a local agronomist for a confirmed diagnosis.
                  </p>
                </Card>
              )}
            </div>
          )}

          {!data && !loading && (
            <Card>
              <div style={{ textAlign: 'center', padding: '36px 20px' }}>
                <div style={{ fontSize: 52, marginBottom: 14 }}>🔬</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--forest)', marginBottom: 8 }}>{t("noImage")}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--stone)', lineHeight: 1.65, maxWidth: 300, margin: '0 auto 20px' }}>
                  {t("uploadAdvice")}
                </p>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--charcoal)', marginBottom: 10 }}>{t("detectable")}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                  {['Leaf Blight', 'Powdery Mildew', 'Rust', 'Bacterial Spot', 'Early Blight', 'Mosaic Virus', 'Downy Mildew'].map((t) => (
                    <span key={t} className="badge badge--stone">{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
