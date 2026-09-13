import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../components/Header';
import Card from '../components/Card';
import { analyzeSoil } from '../services/soilService';

export default function SoilAnalysis() {

  const { t } = useTranslation();

  const PRESETS = [
    { key:"sandySoil", moisture:20, nitrogen:30, phosphorus:25 },
    { key:"claySoil", moisture:60, nitrogen:70, phosphorus:55 },
    { key:"loamSoil", moisture:42, nitrogen:55, phosphorus:48 },
    { key:"dryField", moisture:15, nitrogen:20, phosphorus:18 }
  ];

  const [form,setForm] = useState({
    moisture:'',
    nitrogen:'',
    phosphorus:''
  });

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const handleChange = (e)=>
    setForm({ ...form, [e.target.name]: e.target.value });

  const applyPreset = (preset)=>
    setForm({
      moisture:String(preset.moisture),
      nitrogen:String(preset.nitrogen),
      phosphorus:String(preset.phosphorus)
    });


  const handleSubmit = async(e)=>{

    e.preventDefault();

    setError('');
    setLoading(true);
    setData(null);

    try{

      const result = await analyzeSoil(form);
      setData(result);

    }
    catch(err){

      setError(
        err.response?.data?.error ||
        err.message ||
        t("analysisFailed")
      );

    }
    finally{
      setLoading(false);
    }

  };


return(

<div className="page-enter">

<Header
eyebrow={t("soilIntelligence")}
title={t("soilAnalysis")}
subtitle={t("soilSubtitle")}
/>


<div className="grid-2" style={{alignItems:'start'}}>


{/* LEFT PANEL */}

<Card title={t("soilParameters")} accent="earth" icon="🪱">


<div style={styles.presetRow}>

<span style={styles.presetLabel}>
{t("loadPreset")}
</span>

{PRESETS.map((p)=>(
<button
key={p.key}
style={styles.presetBtn}
onClick={()=>applyPreset(p)}
>
{t(p.key)}
</button>
))}

</div>


<div style={styles.divider}/>


<form onSubmit={handleSubmit}>


{/* Moisture */}

<div className="form-group" style={{marginBottom:18}}>

<label className="form-label" htmlFor="moisture">

{t("soilMoisture")}

<span style={styles.hint}>
 — {t("moistureIdeal")}
</span>

</label>

<input
id="moisture"
name="moisture"
type="number"
min="0"
max="100"
className="form-input"
placeholder="45"
value={form.moisture}
onChange={handleChange}
required
/>

</div>



{/* Nitrogen */}

<div className="form-group" style={{marginBottom:18}}>

<label className="form-label" htmlFor="nitrogen">

{t("nitrogen")}

<span style={styles.hint}>
 — {t("nitrogenIdeal")}
</span>

</label>

<input
id="nitrogen"
name="nitrogen"
type="number"
min="0"
className="form-input"
placeholder="55"
value={form.nitrogen}
onChange={handleChange}
required
/>

</div>



{/* Phosphorus */}

<div className="form-group" style={{marginBottom:18}}>

<label className="form-label" htmlFor="phosphorus">

{t("phosphorus")}

<span style={styles.hint}>
 — {t("phosphorusIdeal")}
</span>

</label>

<input
id="phosphorus"
name="phosphorus"
type="number"
min="0"
className="form-input"
placeholder="42"
value={form.phosphorus}
onChange={handleChange}
required
/>

</div>


{error &&
<div className="alert alert--error" style={{marginBottom:16}}>
⚠ {error}
</div>
}


<button
type="submit"
className="btn btn-primary btn--full btn--lg"
disabled={loading}
>

{loading
? t("analyzing")
: `🔬 ${t("analyzeSoil")}`}

</button>

</form>

</Card>



{/* RIGHT PANEL */}

<div>

{data && !loading && (

<Card accent="green" icon="✅" style={{marginBottom:20}}>

<div className="result-container" style={{margin:0}}>

<div style={styles.resultHeader}>

<span className="badge badge--green">
{t("analysisComplete")}
</span>

<span style={styles.resultTime}>
Just now
</span>

</div>


<div style={styles.recCard}>

<div style={styles.recIcon}>
🌱
</div>

<div>

<div style={styles.recLabel}>
{t("fertilizerRecommendation")}
</div>

<div style={styles.recValue}>
{data.fertilizer}
</div>

</div>

</div>



<div style={styles.recCard}>

<div style={styles.recIcon}>
💧
</div>

<div>

<div style={styles.recLabel}>
{t("irrigationStatus")}
</div>

<div style={styles.recValue}>
{data.irrigation}
</div>

</div>

</div>


</div>

</Card>

)}



<Card title={t("npkGuide")} accent="amber" icon="📖">

{[
{ icon:'🟢', label:t("nitrogen"), desc:t("nitrogenGuide") },
{ icon:'🟠', label:t("phosphorus"), desc:t("phosphorusGuide") },
{ icon:'🟣', label:"Potassium (K)", desc:t("potassiumGuide") },
{ icon:'💧', label:t("moisture"), desc:t("moistureGuide") }
].map((g)=>(
<div key={g.label} style={styles.guideItem}>
<span style={styles.guideIcon}>{g.icon}</span>
<div>
<div style={styles.guideLabel}>{g.label}</div>
<div style={styles.guideDesc}>{g.desc}</div>
</div>
</div>
))}

</Card>

</div>

</div>

</div>

);
}



const styles = {
  presetRow:{display:'flex',flexWrap:'wrap',gap:8,alignItems:'center',marginBottom:18},
  presetLabel:{fontSize:12,color:'var(--stone)',fontWeight:500},
  presetBtn:{
    padding:'5px 12px',
    borderRadius:20,
    border:'1.5px solid var(--border)',
    background:'var(--parchment)',
    fontSize:12,
    color:'var(--charcoal)',
    cursor:'pointer',
    fontWeight:500
  },
  divider:{height:1,background:'var(--border)',margin:'0 0 20px'},
  hint:{color:'var(--dust)',fontSize:11.5,fontWeight:400},

  resultHeader:{display:'flex',justifyContent:'space-between',marginBottom:18},
  resultTime:{fontSize:11.5,color:'var(--dust)'},

  recCard:{
    display:'flex',
    alignItems:'center',
    gap:14,
    padding:'16px',
    background:'var(--mist)',
    borderRadius:10,
    marginBottom:12
  },

  recIcon:{fontSize:24},

recLabel:{
  fontSize:11,
  textTransform:'uppercase',
  color:'var(--stone)',
  marginBottom:4,
  fontWeight:600
},

recValue:{
  fontSize:16,
  fontWeight:700,
  color:'var(--forest)'
},

guideItem:{
  display:'flex',
  gap:12,
  marginBottom:16
},

guideIcon:{fontSize:18},

guideLabel:{
  fontSize:13,
  fontWeight:600,
  color:'var(--forest)'
},

guideDesc:{
  fontSize:12.5,
  color:'var(--stone)'
}

};
