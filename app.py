from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS for all routes

@app.route('/submit_text', methods=['POST'])
def submit_text():
    text = request.json.get('text')
    # Do something with the text
    print("Received text:", text)
    return jsonify({"message": "Text received successfully"})

@app.route('/')
def index():
    # Serve the HTML file from the static folder
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)

# python -m http.server 8080
