import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Header from '../components/Header';
import Card from '../components/Card';
import { getWeatherByCity } from '../services/weatherService';

const QUICK_CITIES = ['Mumbai','Delhi','Bengaluru','Hyderabad','Chennai','Kolkata','Pune','Jaipur'];

function getTempIcon(temp) {
  if (temp >= 38) return '🔥';
  if (temp >= 30) return '☀️';
  if (temp >= 22) return '⛅';
  if (temp >= 12) return '🌧';
  return '❄️';
}

function getTempDesc(temp,t){
  if (temp >= 38) return t("extremeHeat");
  if (temp >= 30) return t("hotWeather");
  if (temp >= 22) return t("warmWeather");
  if (temp >= 12) return t("coolWeather");
  return t("coldWeather");
}

function getHumidityInfo(h,t){
  if (h > 80) return { label: t("veryHumid"), color:'#2980b9'};
  if (h > 60) return { label: t("humid"), color:'#27ae60'};
  if (h > 40) return { label: t("comfortable"), color:'#16a085'};
  return { label: t("dry"), color:'#e67e22'};
}

function getWindAdvisory(w,t){
  if (w > 10) return t("strongWind");
  if (w > 5) return t("moderateWind");
  return t("calmWind");
}

function getCropAdvice(temp,humidity,t){
  if (temp >= 25 && humidity > 60) return t("excellentCrops");
  if (temp >= 20) return t("goodCrops");
  return t("coolCrops");
}

function getIrrigationAdvice(humidity,t){
  if (humidity < 40) return t("lowHumidity");
  if (humidity < 60) return t("moderateHumidity");
  return t("highHumidity");
}

export default function Weather(){

  const { t } = useTranslation();

  const [city,setCity] = useState('');
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [lastCity,setLastCity] = useState('');

  const fetchWeather = async(targetCity)=>{
    const c = (targetCity || city).trim();
    if(!c) return;

    setError('');
    setLoading(true);
    setData(null);

    try{
      const result = await getWeatherByCity(c);
      setData(result);
      setLastCity(result.city || c);
    }catch(err){
      setError(err.response?.data?.error || "Weather fetch error");
    }finally{
      setLoading(false);
    }
  };

  const hInfo = data ? getHumidityInfo(data.humidity,t) : null;

  return(

<div className="page-enter">

<Header
eyebrow={t("weatherIntelligence")}
title={t("liveWeatherData")}
subtitle={t("weatherSubtitle")}
/>


<Card style={{marginBottom:24}}>

<form
onSubmit={(e)=>{e.preventDefault(); fetchWeather();}}
style={{marginBottom:16}}
>

<div style={{display:'flex',gap:12,alignItems:'center'}}>

<div style={{position:'relative',flex:1}}>

<input
type="text"
className="form-input"
placeholder={t("enterCity")}
value={city}
onChange={(e)=>setCity(e.target.value)}
style={{paddingLeft:42}}
/>

<span
style={{
position:'absolute',
left:14,
top:'50%',
transform:'translateY(-50%)',
fontSize:15
}}
>
🔍
</span>

</div>

<button
type="submit"
className="btn btn-primary"
disabled={loading || !city.trim()}
>
{loading ? t("fetchingWeather") : t("getWeather")}
</button>

</div>

</form>


<div style={{display:'flex',flexWrap:'wrap',gap:8,alignItems:'center'}}>

<span style={{fontSize:12,color:'var(--stone)',fontWeight:500}}>
{t("quickSelect")}
</span>

{QUICK_CITIES.map((c)=>(

<button
key={c}
style={{
padding:'5px 14px',
borderRadius:20,
border:'1.5px solid var(--border)',
background:lastCity.toLowerCase()===c.toLowerCase()
?'var(--canopy)'
:'var(--parchment)',
color:lastCity.toLowerCase()===c.toLowerCase()
?'white'
:'var(--charcoal)',
fontSize:12.5,
fontWeight:500,
cursor:'pointer'
}}
onClick={()=>{setCity(c); fetchWeather(c)}}
>
{c}
</button>

))}

</div>

</Card>


{error &&

<div className="alert alert--error" style={{marginBottom:20}}>
⚠ {error}
</div>

}


{loading &&

<Card>

<div style={{
display:'flex',
flexDirection:'column',
alignItems:'center',
padding:'48px',
gap:14
}}>

<span className="spinner spinner--dark"/>

<p style={{fontSize:14,color:'var(--stone)'}}>
{t("fetchingLiveWeather")}
</p>

</div>

</Card>

}



{data && !loading && (

<div>

<div style={{
background:'linear-gradient(140deg,var(--forest) 0%,#264a24 60%,#1a3a18 100%)',
borderRadius:'var(--radius-lg)',
padding:'40px 44px',
display:'flex',
alignItems:'center',
justifyContent:'space-between',
gap:24,
marginBottom:20
}}>

<div style={{color:'white'}}>

<div style={{fontSize:13,marginBottom:8}}>
📍 {lastCity}
</div>

<div style={{display:'flex',alignItems:'baseline',gap:8}}>

<span style={{fontSize:48}}>
{getTempIcon(data.temperature)}
</span>

<span style={{fontSize:72}}>
{data.temperature}
</span>

<span>°C</span>

</div>

<div style={{fontSize:14,marginTop:10}}>
{getTempDesc(data.temperature,t)}
</div>

</div>


<div style={{display:'flex',gap:16}}>

{[
{icon:'💧',label:t("humidity"),value:`${data.humidity}%`,sub:hInfo?.label},
{icon:'🌬',label:t("wind"),value:`${data.wind} m/s`,sub:t("speed")}
].map((s)=>(

<div key={s.label}
style={{
textAlign:'center',
padding:'20px 24px',
background:'rgba(255,255,255,0.08)',
borderRadius:14
}}
>

<span style={{fontSize:24,display:'block'}}>
{s.icon}
</span>

<div style={{fontSize:24}}>
{s.value}
</div>

<div style={{fontSize:11}}>
{s.label}
</div>

<div style={{fontSize:10}}>
{s.sub}
</div>

</div>

))}

</div>

</div>



<div className="grid-3">

<Card accent="green" icon="🌾">
<h4>{t("cropSuitability")}</h4>
<p>
{getCropAdvice(data.temperature,data.humidity,t)}
</p>
</Card>


<Card accent="amber" icon="💦">
<h4>{t("irrigationAdvice")}</h4>
<p>
{getIrrigationAdvice(data.humidity,t)}
</p>
</Card>


<Card accent="earth" icon="🌿">
<h4>{t("windAdvisory")}</h4>
<p>
{getWindAdvisory(data.wind,t)} — <strong>{data.wind} m/s</strong>
</p>
</Card>


</div>

</div>

)}

</div>

);
}
