import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { login, saveToken, saveUser } from '../services/authService';

export default function Login() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState({ email:'', password:'' });
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [showPwd,setShowPwd] = useState(false);

  const handleChange = (e)=>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async(e)=>{
    e.preventDefault();

    setError('');
    setLoading(true);

    try{
      const data = await login(form);

      saveToken(data.token);

      saveUser(
        data.user ||
        { name: form.email.split('@')[0], email: form.email }
      );

      navigate('/');

    }catch(err){

      setError(
        err.response?.data?.message ||
        t("loginFailed")
      );

    }finally{
      setLoading(false);
    }
  };


  return (

<div style={styles.page}>


{/* LEFT PANEL */}

<div style={styles.artPanel}>

<div style={styles.artOverlay}/>

<div style={styles.artContent}>

<div style={styles.artLogo}>
🌱 Agri<span style={styles.artLogoAccent}>Mate</span>
</div>

<p style={styles.artTagline}>
"{t("tagline")}"
</p>


<div style={styles.featureList}>

{[
{ icon:'🌤', text:t("featureWeather") },
{ icon:'🪱', text:t("featureSoil") },
{ icon:'📈', text:t("featureMarket") },
{ icon:'🔬', text:t("featureDisease") }

].map((f)=>(

<div key={f.icon} style={styles.feature}>

<span style={styles.featureIcon}>
{f.icon}
</span>

<span style={styles.featureText}>
{f.text}
</span>

</div>

))}

</div>

</div>

</div>



{/* RIGHT PANEL */}

<div style={styles.formPanel}>

<div style={styles.formInner}>

<div style={styles.formHeader}>

<h2 style={styles.formTitle}>
{t("welcomeBack")}
</h2>

<p style={styles.formSub}>
{t("signInAccount")}
</p>

</div>


{error && (

<div style={styles.errorBox}>
⚠ {error}
</div>

)}


<form onSubmit={handleSubmit} style={styles.form}>


<div style={styles.formGroup}>

<label style={styles.label} htmlFor="email">
{t("emailAddress")}
</label>

<input
id="email"
name="email"
type="email"
style={styles.input}
placeholder={t("emailPlaceholder")}
value={form.email}
onChange={handleChange}
required
autoComplete="email"
/>

</div>



<div style={{...styles.formGroup, marginTop:16, position:'relative'}}>

<label style={styles.label} htmlFor="password">
{t("password")}
</label>

<input
id="password"
name="password"
type={showPwd ? 'text':'password'}
style={{...styles.input, paddingRight:44}}
placeholder={t("passwordPlaceholder")}
value={form.password}
onChange={handleChange}
required
autoComplete="current-password"
/>


<button
type="button"
onClick={()=>setShowPwd(!showPwd)}
style={styles.eyeBtn}
tabIndex={-1}
>

{showPwd ? '🙈' : '👁'}

</button>

</div>



<button
type="submit"
style={{...styles.btn, marginTop:24}}
disabled={loading}
>

{loading ? t("signingIn") : t("signIn")}

</button>

</form>


<p style={styles.switchText}>

{t("noAccount")}{" "}

<Link to="/signup" style={styles.switchLink}>
{t("createAccount")}
</Link>

</p>


</div>

</div>

</div>

);
}



const styles = {

page:{
display:'flex',
minHeight:'100vh'
},

artPanel:{
flex:1,
position:'relative',
overflow:'hidden',
display:'flex',
alignItems:'center',

background:`
radial-gradient(ellipse at 15% 85%, rgba(74,140,71,0.55) 0%, transparent 52%),
radial-gradient(ellipse at 85% 15%, rgba(212,135,58,0.35) 0%, transparent 48%),
linear-gradient(160deg, #0e1f0d 0%, #1C3A1A 45%, #24481a 100%)
`
},

artOverlay:{
position:'absolute',
inset:0,
backgroundImage:
'radial-gradient(circle at 25% 75%, rgba(125,189,121,0.06) 0 1px, transparent 1px)',
backgroundSize:'44px 44px'
},

artContent:{
position:'relative',
zIndex:1,
padding:'60px 56px'
},

artLogo:{
fontFamily:"'Playfair Display', serif",
fontSize:40,
fontWeight:700,
color:'#F5ECD8',
marginBottom:14
},

artLogoAccent:{
color:'#E8B84B'
},

artTagline:{
fontFamily:"'Playfair Display', serif",
fontStyle:'italic',
fontSize:17,
color:'rgba(245,236,216,0.62)',
maxWidth:340,
lineHeight:1.7,
marginBottom:56
},

featureList:{
display:'flex',
flexDirection:'column',
gap:22
},

feature:{
display:'flex',
alignItems:'flex-start',
gap:14
},

featureIcon:{
fontSize:20,
width:44,
height:44,
background:'rgba(255,255,255,0.07)',
borderRadius:10,
display:'flex',
alignItems:'center',
justifyContent:'center',
flexShrink:0,
border:'1px solid rgba(255,255,255,0.1)'
},

featureText:{
fontSize:13.5,
color:'rgba(245,236,216,0.7)',
lineHeight:1.55,
paddingTop:12
},

formPanel:{
width:460,
background:'#FAF6EE',
display:'flex',
alignItems:'center',
justifyContent:'center'
},

formInner:{
width:'100%',
maxWidth:380,
padding:'0 40px'
},

formHeader:{
marginBottom:32
},

formTitle:{
fontFamily:"'Playfair Display', serif",
fontSize:28,
fontWeight:700,
color:'#1C3A1A',
marginBottom:6
},

formSub:{
fontSize:14,
color:'#7A6A52'
},

errorBox:{
background:'#fdecea',
border:'1px solid #f5c6cb',
borderRadius:10,
padding:'12px 16px',
fontSize:13.5,
color:'#7a1e1e',
marginBottom:20
},

form:{
display:'flex',
flexDirection:'column'
},

formGroup:{
display:'flex',
flexDirection:'column'
},

label:{
fontSize:13,
fontWeight:600,
color:'#3A2E1E',
marginBottom:6
},

input:{
width:'100%',
padding:'11px 14px',
borderRadius:10,
border:'1.5px solid #DDD3BE',
background:'#FFFDF8',
fontSize:14,
color:'#3A2E1E',
outline:'none',
fontFamily:"'DM Sans', sans-serif"
},

eyeBtn:{
position:'absolute',
right:12,
top:'50%',
transform:'translateY(8px)',
background:'none',
border:'none',
fontSize:16,
cursor:'pointer',
padding:4
},

btn:{
padding:'13px 24px',
background:'linear-gradient(135deg, #2D5A2B, #1C3A1A)',
color:'white',
border:'none',
borderRadius:10,
fontSize:15,
fontWeight:600,
cursor:'pointer',
fontFamily:"'DM Sans', sans-serif"
},

switchText:{
fontSize:13.5,
color:'#7A6A52',
textAlign:'center',
marginTop:22
},

switchLink:{
color:'#4A8C47',
fontWeight:600
}

};
