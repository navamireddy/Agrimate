import sys
from ai_bot import ask_agri_bot

query = sys.argv[1]

answer = ask_agri_bot(query)

print(answer)