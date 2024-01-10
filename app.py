import numpy as np
import pickle
import nltk
from nltk.corpus import stopwords
from nltk.stem.arlstem import ARLSTem
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import os



nltk.download('stopwords')
nltk.download('punkt')
stop_words = set(stopwords.words('arabic'))
#print(stop_words)


def remove_stowords(elements):
    stemmmer = ARLSTem()
    corps = []
    for string in elements :
        string = nltk.sent_tokenize(string.strip())
        string = [ stemmmer.stem(word) for word in string if not word in stop_words ]
        string = ''.join(string)
        corps.append(string)
    return corps




Folder_tokenizers = './Tokenizers'
def load_tokenizer_by_number(folder_path, target_number):
    # List files in the folder
    files = os.listdir(folder_path)

    # Filter files that end with the specified number
    
    matching_files = [file for file in files if file == f'{target_number}.pkl']

    if not matching_files:
        print(f"No files found ending with {target_number}.pkl")
        return None

    # Select the first matching file
    selected_file = matching_files[0]
    print("selected_file :",selected_file)
    file_path = os.path.join(folder_path, selected_file)

    # Load the tokenizer from the file
    with open(file_path, 'rb') as tokenizer_file:
        tokenizer = pickle.load(tokenizer_file)

    return tokenizer



Folder_models = './models'
def load_model_by_number(folder_path, target_number):
    # List files in the folder
    files = os.listdir(folder_path)

    # Filter files that end with the specified number
    matching_files = [file for file in files if file == f'{target_number}.h5']


    if not matching_files:
        print(f"No files found ending with {target_number}.h5")
        return None

    # Select the first matching file
    selected_file = matching_files[0]
    file_path = os.path.join(folder_path, selected_file)

    # Load the model from the file
    model = load_model(file_path)

    return model




def predict_sequence(response,id):
    
    # Convert texts to sequences of integers
    tokenizer_charge = load_tokenizer_by_number(Folder_tokenizers, id)
    sequences = tokenizer_charge.texts_to_sequences([response])
    print("sequences tokenizer :",sequences)
    # Pad sequences to ensure uniform length
    max_sequence_length = max(len(s) for s in sequences)
    sequences = pad_sequences(sequences, max_sequence_length)
    print("sequences padding :",sequences)
    # # Make predictions
    model = load_model_by_number(Folder_models, id)
    predicted_probs = model.predict(sequences)
    predicted_classes = np.argmax(predicted_probs, axis=1)
    print(predicted_classes)
    return predicted_classes



def recevoir_listes():
    Responses = ['هديت الرسول قصعة خبز ولبن وسمن.','في عام الحزن، فقد النبي صلى الله عليه وسلم زوجته خديجة وعمه أبو طالب، مما ألقى بظلال الحزن على حياته.']
    ids = [1, 3]
    corps = remove_stowords(Responses)

    for response, id_value in zip(corps, ids):
        print(response)
        print(id_value)
        result = predict_sequence(response, id_value)




recevoir_listes()