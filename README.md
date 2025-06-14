# 🎬 MovieMatch: Personalized Movie Recommendations

MovieMatch is a full-stack web application that offers personalized movie recommendations based on user demographics using the MovieLens 100K dataset. It combines a sleek frontend built with React and TypeScript, and a Python Flask backend for data processing and API integration.

---

## 🚀 Project Objective

The goal of MovieMatch is to demonstrate a practical recommendation system by showcasing:

- 🔧 **Frontend Development**: React + TypeScript + Tailwind CSS
- 🧠 **Backend Development**: Python + Flask for recommendation logic
- 🔗 **Frontend–Backend Integration**: RESTful API endpoints
- 📊 **Data Handling**: Real-world dataset (MovieLens 100K)
- ⚙️ **Dev Environment Setup**: Nix for consistent cross-platform development

---

## 🌐 What the Website Does

Users enter their **age**, **gender**, and **occupation**. The backend uses this demographic data to:

- Identify similar users from the dataset.
- Recommend movies and genres popular among similar users.

**Input Fields:**
- Age (number)
- Gender (Male/Female)
- Occupation (from predefined list)

**Output:**
- List of movie recommendations
- List of genres with occurrence counts

---

## 🏗️ Architecture

The system uses a **client-server architecture**:

- **Frontend (React)**:
  - Vite-powered SPA with TypeScript and Tailwind CSS
  - UI components built using Shadcn UI
- **Backend (Flask)**:
  - REST API that ingests user input and outputs recommendations
  - Data processed using Pandas and NumPy

---

## 🧰 Technologies Used

### Frontend:
- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI

### Backend:
- Python
- Flask
- Pandas
- NumPy
- Flask-CORS

### Dev Environment:
- Nix (isolated, reproducible development environment)

---

## 📁 Project Structure

.

├── public/ # Static assets

├── src/

│ ├── components/ # Reusable UI components

│ │ └── ui/ # Shadcn UI elements

│ ├── hooks/ # Custom React hooks

│ ├── lib/ # Utility functions

│ ├── pages/ # Page components (e.g., Index.tsx)

│ ├── python_backend/ # Flask backend

│ │ ├── u-1.data # Ratings data

│ │ ├── u-1.genre # Genre list

│ │ ├── u-1.item # Movie details

│ │ ├── u-1.user # User demographics

│ │ ├── app.py # Flask app entry point

│ │ └── RecommendsMovie.py# Recommendation logic

│ ├── App.tsx # App wrapper

│ ├── index.css # Global styles

│ └── main.tsx # Entry point

├── dev.nix # Nix environment setup

├── index.html # Root HTML template

├── package.json # Frontend dependencies

├── vite.config.ts # Vite config

└── README.md # Project documentation

---

## 📦 Dependencies

### Frontend:
Managed via `npm`, `yarn`, or `pnpm`.

Key packages:
- `react`, `react-dom`, `typescript`, `tailwindcss`, `vite`, `@shadcn/ui`

### Backend:
Managed via **Nix**, specified in `dev.nix`.

Key packages:
- `flask`, `pandas`, `numpy`, `flask-cors`

---

## 🛠️ How to Run the Project
```
bash

### 1. Clone the Repository


git clone https://github.com/Akshaykumarmundrathi/flicks-for-you
cd flicks-for-you
2. Start Nix Development Environment
bash
Copy
Edit
nix-shell dev.nix
This sets up Python with Flask, Pandas, and other backend dependencies.

3. Run the Flask Backend
Inside the Nix shell:

bash
Copy
Edit
python -m src.python_backend.app
Flask server starts at http://127.0.0.1:5000.

4. Install Frontend Dependencies
Open a new terminal (can be outside Nix shell):

bash
Copy
Edit
npm install
# or
yarn install
# or
pnpm install
5. Run the Frontend
bash
Copy
Edit
npm run dev
# or
yarn dev
# or
pnpm dev
The app runs on http://localhost:8080.

🔌 API Endpoint
POST /api/recommend
Request Body:

json
Copy
Edit
{
  "age": 30,
  "gender": "M",
  "occupation": "student"
}
Response Body:

json
Copy
Edit
{
  "recommended_movies": [
    "Movie Title 1",
    "Movie Title 2"
  ],
  "recommended_genres": [
    { "name": "Action", "count": 5 },
    { "name": "Drama", "count": 3 }
  ]
}
Error Responses:

Returns 400 with:

{ "error": "Invalid input format." }
```
🛠️ Customization
🎨 Styling: Tailwind classes can be modified in React components

🧠 Logic: Update recommend_movies() in RecommendsMovie.py

🎬 Dataset: Replace u-1.* files for different data (adjust parsing)

🧩 UI: Add or edit components from Shadcn UI

🤝 Contributing
Contributions are welcome! Please create a pull request or open an issue.

📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

📬 Contact
For questions, suggestions, or improvements, feel free to reach out or open an issue.
