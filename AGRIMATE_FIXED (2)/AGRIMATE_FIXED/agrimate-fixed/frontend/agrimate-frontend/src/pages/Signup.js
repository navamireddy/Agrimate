import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { register, login, saveToken, saveUser } from '../services/authService';

export default function Signup() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name:'',
    email:'',
    password:'',
    confirm:''
  });

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [showPwd,setShowPwd] = useState(false);

  const handleChange = (e)=>
    setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async(e)=>{

    e.preventDefault();
    setError('');

    if(!form.name.trim())
      return setError(t("enterFullName"));

    if(form.password !== form.confirm)
      return setError(t("passwordMismatch"));

    if(form.password.length < 6)
      return setError(t("passwordLength"));

    setLoading(true);

    try{

      await register({
        name:form.name.trim(),
        email:form.email,
        password:form.password
      });

      const data = await login({
        email:form.email,
        password:form.password
      });

      saveToken(data.token);

      saveUser(
        data.user ||
        { name:form.name.trim(), email:form.email }
      );

      navigate('/');

    }
    catch(err){

      setError(
        err.response?.data?.error ||
        t("registrationFailed")
      );

    }
    finally{
      setLoading(false);
    }
  };


  const strength = (() => {

    const p = form.password;

    if(!p) return { level:0, label:'' };

    if(p.length < 6)
      return { level:1, label:t("tooShort"), color:'#e74c3c' };

    if(p.length < 8)
      return { level:2, label:t("weak"), color:'#e67e22' };

    if(!/[A-Z]/.test(p) || !/[0-9]/.test(p))
      return { level:3, label:t("fair"), color:'#f1c40f' };

    return { level:4, label:t("strong"), color:'#27ae60' };

  })();


return(

<div style={styles.page}>


{/* LEFT FORM PANEL */}

<div style={styles.formPanel}>

<div style={styles.formInner}>

<Link to="/login" style={styles.backLink}>
← {t("backToLogin")}
</Link>


<div style={styles.formHeader}>

<div style={styles.logoSmall}>
🌱 AgriMate
</div>

<h2 style={styles.formTitle}>
{t("createAccount")}
</h2>

<p style={styles.formSub}>
{t("joinFarmers")}
</p>

</div>


{error &&
<div style={styles.errorBox}>
⚠ {error}
</div>
}


<form onSubmit={handleSubmit} style={styles.form}>


<div style={styles.formGroup}>

<label style={styles.label} htmlFor="name">
{t("fullName")}
</label>

<input
id="name"
name="name"
type="text"
style={styles.input}
placeholder={t("namePlaceholder")}
value={form.name}
onChange={handleChange}
required
/>

</div>



<div style={{...styles.formGroup, marginTop:16}}>

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
placeholder={t("passwordMin")}
value={form.password}
onChange={handleChange}
required
/>

<button
type="button"
onClick={()=>setShowPwd(!showPwd)}
style={styles.eyeBtn}
tabIndex={-1}
>
{showPwd ? '🙈':'👁'}
</button>


{form.password && (

<div style={styles.strengthRow}>

<div style={styles.strengthBar}>

{[1,2,3,4].map(i=>(
<div
key={i}
style={{
...styles.strengthSegment,
background:
i <= strength.level
? strength.color
: '#DDD3BE'
}}
/>
))}

</div>

<span
style={{
...styles.strengthLabel,
color:strength.color
}}
>
{strength.label}
</span>

</div>

)}

</div>



<div style={{...styles.formGroup, marginTop:16}}>

<label style={styles.label} htmlFor="confirm">
{t("confirmPassword")}
</label>

<input
id="confirm"
name="confirm"
type="password"
style={{
...styles.input,
borderColor:
form.confirm &&
form.confirm !== form.password
? '#e74c3c'
: undefined
}}
placeholder={t("repeatPassword")}
value={form.confirm}
onChange={handleChange}
required
/>

</div>


<button
type="submit"
style={{...styles.btn, marginTop:24}}
disabled={loading}
>

{loading ? t("creatingAccount") : t("createAccountBtn")}

</button>

</form>



<p style={styles.switchText}>

{t("alreadyAccount")}{" "}

<Link to="/login" style={styles.switchLink}>
{t("signIn")}
</Link>

</p>


<p style={styles.terms}>
{t("termsText")}
</p>

</div>

</div>



{/* RIGHT PANEL */}

<div style={styles.artPanel}>

<div style={styles.artOverlay}/>

<div style={styles.artContent}>

<div style={styles.artQuote}>
"{t("agricultureQuote")}"
</div>

<div style={styles.artAuthor}>
— Thomas Jefferson
</div>


<div style={styles.statsGrid}>

{[
{ num:'10K+', label:t("activeFarmers") },
{ num:'7', label:t("diseaseTypes") },
{ num:'24/7', label:t("liveUpdates") },
{ num:'50+', label:t("cropsSupported") }
].map((s)=>(
<div key={s.label} style={styles.statBox}>
<div style={styles.statNum}>{s.num}</div>
<div style={styles.statLabel}>{s.label}</div>
</div>
))}

</div>

</div>

</div>

</div>

);
}


const styles = { /* styles unchanged */ };
