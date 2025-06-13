

# Movie Recommendation System: Complete Overview

## **1. Introduction**

This project is a **movie recommendation system** designed to help users discover movies they might like, based on their personal information and the preferences of similar users. The system uses real-world data from the MovieLens 100K dataset and employs both simple collaborative filtering and advanced matrix factorization techniques.

---

## **2. Datasets and Their Structures**

### **a. User Data (`u-1.user`)**

- **Purpose:** Stores information about each user.
- **Fields:**  
  - **user_id:** Unique identifier for each user.
  - **age:** The user’s age.
  - **gender:** The user’s gender (M or F).
- **occupation:** The user’s occupation (e.g., technician, writer).
- **zip_code:** The user’s postal code.
- **Example:**  
  ```
  1|24|M|technician|85711
  2|53|F|other|94043
  ```

### **b. Ratings Data (`u-1.data`)**

- **Purpose:** Stores movie ratings given by users.
- **Fields:**  
  - **user_id:** The user who gave the rating.
  - **item_id:** The movie that was rated.
  - **rating:** The rating score (1–5).
  - **timestamp:** When the rating was given.
- **Example:**  
  ```
  196	242	3	881250949
  186	302	3	891717742
  ```

### **c. Movie Data (`u-1.item`)**

- **Purpose:** Stores details about each movie.
- **Fields:**  
  - **movie_id:** Unique identifier for each movie.
  - **movie_title:** The title of the movie.
  - **release_date:** When the movie was released.
  - **video_release_date:** (Often empty)
  - **IMDb_URL:** Link to the movie on IMDb.
  - **genre_1 to genre_19:** Binary flags indicating if the movie belongs to each genre.
- **Example:**  
  ```
  1|Toy Story (1995)|01-Jan-1995||http://us.imdb.com/M/title-exact?Toy%20Story%20(1995)|0|0|0|1|1|1|0|0|0|0|0|0|0|0|0|0|0|0|0
  ```

### **d. Genre Data (`u-1.genre`)**

- **Purpose:** Maps genre IDs to genre names.
- **Fields:**  
  - **genre_name|genre_id**
- **Example:**  
  ```
  unknown|0
  Action|1
  Adventure|2
  ```

---

## **3. Code Files and Their Roles**

### **a. DataPreprocessing.py**

- **Purpose:** Prepares the data for training and evaluation.
- **What it does:**
  - **Loads the datasets:** Reads user, ratings, movie, and genre data.
  - **Splits the data:** Divides the ratings into training and test sets.
  - **Saves the splits:** Writes the training and test sets to `train.txt` and `test.txt`.
- **Inputs:**  
  - `u-1.data` (ratings)
  - `u-1.user` (users)
  - `u-1.item` (movies)
  - `u-1.genre` (genres)
- **Outputs:**  
  - `train.txt` (training ratings)
  - `test.txt` (test ratings)
- **Objective:**  
  - Prepare clean, ready-to-use datasets for model training and evaluation.

**How it works:**
1. **Loads all data files.**
2. **Splits the ratings into 80% training and 20% test.**
3. **Saves the splits for later use.**

---

### **b. RecommendsSystem.py**

- **Purpose:** Trains a matrix factorization model to predict movie ratings.
- **What it does:**
  - **Initializes user and movie latent factor matrices (`P` and `Q`).**
  - **Trains the model:** Uses gradient descent to learn latent factors that minimize the prediction error.
  - **Evaluates the model:** Calculates the error (objective function) and plots it over iterations.
  - **Hyperparameter tuning:** Tests different numbers of latent factors, regularization strengths, and learning rates.
  - **Evaluates performance:** Calculates RMSE on both training and test data.
  - **Saves the model:** Stores the learned matrices as `P.npy` and `Q.npy`.
- **Inputs:**  
  - `train.txt` (training ratings)
  - (Optional) `test.txt` (test ratings)
- **Outputs:**  
  - `P.npy` (user latent factors)
  - `Q.npy` (movie latent factors)
  - **Plots:** Error vs. iterations, error vs. latent factors, etc.
  - **RMSE:** Root Mean Squared Error on train and test data.
- **Objective:**  
  - Learn latent factors that capture user and movie preferences.
  - Provide a basis for making personalized recommendations.

**How it works:**
1. **Determines the number of users and movies from the data.**
2. **Initializes random latent factor matrices.**
3. **Trains the model by updating the matrices to minimize prediction error.**
4. **Evaluates and tunes the model using different hyperparameters.**
5. **Saves the final matrices for use in recommendations.**

---

### **c. RecommendsMovie.py**

- **Purpose:** Provides movie and genre recommendations to users based on their profile.
- **What it does:**
  - **Loads the datasets.**
  - **Prompts the user for age, gender, and occupation.**
  - **Finds similar users:** Searches for users with similar age, gender, and occupation.
  - **Recommends movies:** Suggests movies that similar users have rated highly (or popular movies if no similar users are found).
  - **Recommends genres:** Identifies the most common genres among the recommended movies.
  - **Displays results:** Shows the top recommended movies and genres.
- **Inputs:**  
  - **User input:** Age, gender, occupation (from a dropdown).
  - **Data files:** `u-1.user`, `u-1.data`, `u-1.item`, `u-1.genre`
- **Outputs:**  
  - **Recommended movies:** List of movie titles.
  - **Recommended genres:** List of genre names.
- **Objective:**  
  - Help users discover movies and genres they are likely to enjoy, based on their profile and the preferences of similar users.

**How it works:**
1. **Loads all necessary data.**
2. **Prompts the user for their profile.**
3. **Finds users with similar profiles.**
4. **Recommends movies and genres based on the preferences of those users.**
5. **Displays the results to the user.**

---

## **4. Project Workflow**

1. **Data Preparation:**  
   - `DataPreprocessing.py` splits the ratings into training and test sets.
2. **Model Training:**  
   - `RecommendsSystem.py` trains the matrix factorization model and saves the latent factors.
3. **Recommendation:**  
   - `RecommendsMovie.py` uses the data and (optionally) the latent factors to recommend movies and genres to users.

---

## **5. Inputs and Outputs Summary**

| File/Step             | Inputs                                  | Outputs                               | Objective                                  |
|-----------------------|-----------------------------------------|---------------------------------------|--------------------------------------------|
| DataPreprocessing.py  | u-1.data, u-1.user, u-1.item, u-1.genre | train.txt, test.txt                   | Prepare data for training and evaluation   |
| RecommendsSystem.py   | train.txt, test.txt                     | P.npy, Q.npy, plots, RMSE             | Train and evaluate the recommendation model|
| RecommendsMovie.py    | User input, data files                  | Recommended movies, genres            | Provide personalized recommendations       |

---

## **6. Objectives**

- **Personalized Recommendations:** Help users discover movies tailored to their profile.
- **User-Friendly Interface:** Simple input and clear output for users.
- **Scalable and Extensible:** Can be extended with more advanced algorithms or a web interface.
- **Educational:** Demonstrates how real-world data and machine learning can be used to build practical recommendation systems.

---

## **7. Example Scenario**

1. **Data Preparation:**  
   - Run `DataPreprocessing.py` to split the data.
2. **Model Training:**  
   - Run `RecommendsSystem.py` to train the model and save the latent factors.
3. **Recommendation:**  
   - Run `RecommendsMovie.py` and enter your age, gender, and occupation.
   - The system recommends movies and genres you might like.

---

## **8. Future Enhancements**

- **Web Interface:** Build a simple website for users to enter their information and see recommendations visually.
- **Advanced Algorithms:** Incorporate matrix factorization (`P.npy`, `Q.npy`) for more accurate recommendations, especially for new users.
- **Genre Images:** Display icons or images for each recommended genre.

---

## **9. Summary Table**

| File                | Role                        | Inputs                         | Outputs                        |
|---------------------|-----------------------------|--------------------------------|--------------------------------|
| DataPreprocessing.py| Data preparation            | u-1.data, u-1.user, u-1.item   | train.txt, test.txt            |
| RecommendsSystem.py | Model training & evaluation | train.txt, test.txt            | P.npy, Q.npy, plots, RMSE      |
| RecommendsMovie.py  | Recommendation              | User input, data files         | Recommended movies, genres     |

---

## **10. Conclusion**

This project provides a **complete, end-to-end movie recommendation system** using real-world data and both simple and advanced machine learning techniques. 
It is easy to understand, extend, and adapt for other recommendation tasks. By combining user profiles, movie ratings, and genre information, the system helps users discover 
new movies they are likely to enjoy, and lays the foundation for more advanced features in the future.
