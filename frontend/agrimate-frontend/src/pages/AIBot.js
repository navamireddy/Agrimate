import React, { useState } from "react";

export default function AIBot() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askBot = async () => {

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    setAnswer(data.reply);
  };

  return (

    <div style={{padding:"40px"}}>

      <h1>🌱 AgriMate AI Assistant</h1>

      <p>Ask any agriculture question.</p>

      <input
        type="text"
        placeholder="Ask about crops, fertilizer, diseases..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        style={{padding:"10px", width:"400px"}}
      />

      <button
        onClick={askBot}
        style={{marginLeft:"10px", padding:"10px 16px"}}
      >
        Ask
      </button>

      <div style={{marginTop:"30px", maxWidth:"600px"}}>
        {answer}
      </div>

    </div>

  );
}