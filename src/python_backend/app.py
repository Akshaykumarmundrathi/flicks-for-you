from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this line
from src.python_backend.RecommendsMovie import recommend_movies

app = Flask(__name__)
CORS(app, origins=["https://8080-firebase-flicks-for-you-1749852392737.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev"])
 # Add this line to enable CORS for all origins

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    if not data or 'age' not in data or 'gender' not in data or 'occupation' not in data:
        return jsonify({'error': 'Invalid input data'}), 400

        # Ensure age is an integer
    try:
        age = int(data['age'])
    except ValueError:
            return jsonify({'error': 'Age must be an integer'}), 400

    gender = data['gender']
    occupation = data['occupation']

        # Call your recommendation function
    recommended_movies, recommended_genres = recommend_movies(age, gender, occupation)

        # Return the recommendations as JSON
    return jsonify({
            'recommended_movies': recommended_movies,
            'recommended_genres': recommended_genres
        })

if __name__ == '__main__':
    app.run(debug=True)
