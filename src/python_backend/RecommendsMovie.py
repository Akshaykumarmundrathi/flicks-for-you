import pandas as pd
import numpy as np
import os # Import the os module

# Get the directory of the current script
script_dir = os.path.dirname(__file__)

def recommend_movies(age, gender, occupation):
    """
    Recommends movies and genres based on user's age, gender, and occupation.
    Returns a tuple of (list of movie titles, list of genre dictionaries).
    Each genre dictionary has 'name' and 'count'.
    """
    # Load data
    # Use os.path.join to construct paths relative to the script's directory
    users_path = os.path.join(script_dir, 'u-1.user')
    ratings_path = os.path.join(script_dir, 'u-1.data')
    items_path = os.path.join(script_dir, 'u-1.item')
    genre_path = os.path.join(script_dir, 'u-1.genre')

    try:
        users = pd.read_csv(users_path, sep='|', names=['user_id', 'age', 'gender', 'occupation', 'zip_code'])
        ratings = pd.read_csv(ratings_path, sep='\t', names=['user_id', 'item_id', 'rating', 'timestamp'])
        items = pd.read_csv(items_path, sep='|', encoding='latin-1', header=None)
        movie_titles = items[1]  # Movie title is in column 1

        # Load genre mapping
        genre_names = []
        with open(genre_path, 'r') as f:
            genre_names = [line.split('|')[0] for line in f if line.strip()]

    except FileNotFoundError as e:
        print(f"Error loading data file: {e}")
        # Return empty lists if data loading fails
        return [], []
    except Exception as e:
        print(f"An error occurred during data loading: {e}")
        return [], []


    # Find similar users (same gender and occupation, similar age)
    similar_users = users[
        (users['gender'] == gender.upper()) &
        (users['occupation'] == occupation) &
        (users['age'].between(age-5, age+5))  # +/- 5 years
    ]

    recommendations = [] # Initialize recommendations list
    if similar_users.empty:
        print("No similar users found. Showing popular movies.") # Debugging print
        # Calculate average rating for each movie and sort
        popular_movies = ratings.groupby('item_id')['rating'].mean().sort_values(ascending=False).head(10)
        recommendations = popular_movies.index.values
    else:
        print(f"Found {len(similar_users)} similar users.") # Debugging print
        # Get top-rated movies by similar users
        similar_ratings = ratings[ratings['user_id'].isin(similar_users['user_id'])]
        if not similar_ratings.empty:
             recommendations = similar_ratings.groupby('item_id')['rating'].mean().sort_values(ascending=False).head(10).index.values


    # Get recommended movie titles
    recommended_movies = [str(movie_titles[movie_id-1]) for movie_id in recommendations]


    # Get recommended genres and their counts (Top 10 most frequent)
    recommended_genres_with_counts = []
    if recommendations.size > 0: # Ensure there are recommendations to process
        genre_counts = {}
        # Genres are in columns 5-23 (0-based index 5:24)
        genre_columns = items.columns[5:24]

        for movie_id in recommendations:
            # Ensure movie_id is within the valid range for the items DataFrame
            if 0 <= movie_id - 1 < len(items):
                movie_genres_row = items.iloc[movie_id-1, 5:24]
                for i, val in enumerate(movie_genres_row):
                    if val == 1 and i < len(genre_names):
                        genre_name = genre_names[i]
                        genre_counts[genre_name] = genre_counts.get(genre_name, 0) + 1
            else:
                print(f"Warning: Movie ID {movie_id} out of bounds during genre counting.")

        # Sort genres by count in descending order and get the top 10
        top_genres = sorted(genre_counts.items(), key=lambda item: item[1], reverse=True)[:10]

        # Format as a list of dictionaries
        recommended_genres_with_counts = [{'name': name, 'count': count} for name, count in top_genres]

    print(f"Calculated genre counts: {genre_counts}") # Debugging print
    print(f"Top 10 genres with counts: {recommended_genres_with_counts}") # Debugging print


    return recommended_movies, recommended_genres_with_counts

# Example usage (commented out for integration in web backend)
# movies, genres = recommend_movies(25, 'M', 'technician')
# print("Recommended Movies:", movies)
# print("Recommended Genres:", genres)
