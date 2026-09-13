import requests
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

# load embedding model
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# load vector database
db = Chroma(
    persist_directory="agri_vector_db",
    embedding_function=embeddings
)

print("\n🌾 AgriBot Ready! Ask a farming question.\n")

while True:

    query = input("You: ")

    # search knowledge base
    results = db.similarity_search(query, k=3)

    context = ""
    for doc in results:
        context += doc.page_content + "\n"

    prompt = f"""
You are an agriculture expert helping farmers in India.

Answer briefly and clearly.

Use bullet points when possible.

Information:
{context}

Farmer question:
{query}

Give a short practical farming answer.
"""

    try:
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

        # handle different ollama response formats
        if "message" in data:
            answer = data["message"]["content"]
        elif "response" in data:
            answer = data["response"]
        else:
            answer = str(data)

        print("\n🌾 AgriBot:\n")
        print(answer)
        print("\n---------------------------\n")

    except Exception as e:
        print("\n⚠️ Error:", e)