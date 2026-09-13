import requests
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

db = Chroma(
    persist_directory="agri_vector_db",
    embedding_function=embeddings
)

def ask_agri_bot(query):

    results = db.similarity_search(query, k=1)

    context = ""
    for doc in results:
        context += doc.page_content + "\n"

    prompt = f"""
You are an agriculture expert helping farmers in India.

Information:
{context}

Farmer question:
{query}

Give a short practical farming answer.
"""

    response = requests.post(
        "http://localhost:11434/api/chat",
        json={
            "model": "gemma3:1b",
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "stream": False
        }
    )

    data = response.json()

    if "message" in data:
        return data["message"]["content"]
    elif "response" in data:
        return data["response"]
    else:
        return "Sorry, I could not generate an answer."