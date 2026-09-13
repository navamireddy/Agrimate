import os
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

knowledge_path = "knowledge_base"

documents = []

for file in os.listdir(knowledge_path):
    if file.endswith(".pdf"):
        loader = PyPDFLoader(os.path.join(knowledge_path, file))
        documents.extend(loader.load())

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

docs = text_splitter.split_documents(documents)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

db = Chroma.from_documents(
    docs,
    embeddings,
    persist_directory="agri_vector_db"
)

db.persist()

print("Agriculture knowledge database created successfully!")