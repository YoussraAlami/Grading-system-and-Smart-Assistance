import tokenize
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import tensorflow as keras
import tensorflow as tf
from keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
from keras.preprocessing.text import Tokenizer
from typing import List
import stanza
import strawberry
from strawberry.asgi import GraphQL
from fastapi.middleware.cors import CORSMiddleware


# Load the tokenizer and models
tokenizer = Tokenizer()
tokenizer.fit_on_texts([""])  # Empty initialization to avoid errors
max_sequence_length =  22 # Set the appropriate max_sequence_length value here



app = FastAPI()



rnn_model = load_model('C:\\Users\\amine\\OneDrive\\Bureau\\DeepLearning\\models\\savedModels\\q1_model.h5')

# Load the Arabic NLP pipeline
stanza.download('ar')   
nlp = stanza.Pipeline('ar')


class Answer(BaseModel): 
    answer: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # You can specify specific HTTP methods
    allow_headers=["*"],  # You can specify specific HTTP headers
)

@app.post("/predict/")
async def predict_grade(answer: Answer):
    return predict(1, answer.answer)


def preprocess_text(text):
    doc = nlp(text)
    tokens = [word.lemma for sent in doc.sentences for word in sent.words if word.upos != 'PUNCT']
    return tokens

app.add_route("/graphql", graphql_app)


def predict(qId, answer):
    # Preprocess the input answer
    print(answer)
    model = load_model("C:\\Users\\PC\\Desktop\\Master_S3\\Deep_Learning\\D_L_Project\\app\\app\\models" + str(qId) + "_model.h5")
    ls = preprocess_text(answer)
    tn = []
    tn.append(ls)
    print(tn)
    # Preprocess the Arabic sentence
    tokenizert = Tokenizer()
    tokenizert.fit_on_texts(tn)
    sequencest = tokenizert.texts_to_sequences(tn)
    sequencest = pad_sequences(sequencest, 22)

    # Make predictions
    data = pad_sequences(sequencest, padding='post', truncating='post', maxlen = 22)

    prediction = model.predict(data)
    # Convert predictions to class indices
    rnn_class = int(np.argmax(prediction, axis=1)[0])

    return {"rnn_prediction": rnn_class}