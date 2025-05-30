# AI-Powered Sales Management and Forecasting

This project is a full-stack application that provides a B2B sales dashboard with predictive analytics. It consists of a React frontend, a Flask backend for ML model serving, and a servlet backend (Java) for additional server-side logic.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Backend Setup (Flask)](#backend-setup-flask)
  - [Frontend Setup (React)](#frontend-setup-react)
  - [Servlet Backend](#servlet-backend)
- [Usage](#usage)
- [Model Artifacts](#model-artifacts)
- [Scripts](#scripts)
- [License](#license)

---

## Project Structure

```
ML Model Training.ipynb         # Jupyter notebook for model training
flask_backend/                 # Python Flask backend for ML inference
  server.py                    # Main Flask server
  util.py                      # Utility functions
  __pycache__/                 # Python bytecode cache
  .vscode/                     # VSCode settings
artifacts/                     # Model artifacts
  model.pickle                 # Trained ML model
  dictionary/                  # Feature dictionaries
  encoders/                    # Encoders for categorical features
react_frontend/                # React frontend
  public/                      # Static files
  src/                         # React source code
servlet_backend/               # Java servlet backend
h2h_milestone_3/Servers/       # Additional server resources
```

---

## Features

- **Interactive Dashboard:** Visualize B2B sales data.
- **Predictive Analytics:** Make predictions using a trained ML model.
- **REST API:** Flask backend serves predictions to the frontend.
- **Modular Frontend:** Built with React and modern best practices.
- **Extensible Backend:** Java servlet backend for additional business logic.

---

## Getting Started

### Backend Setup (Flask)

1. **Navigate to the backend directory:**

   ```sh
   cd flask_backend
   ```

2. **Install dependencies:**

   ```sh
   pip install -r requirements.txt
   ```

3. **Run the Flask server:**

   ```sh
   python server.py
   ```

   The server will start on `http://localhost:5000` by default.

### Frontend Setup (React)

1. **Navigate to the frontend directory:**

   ```sh
   cd react_frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the React app:**

   ```sh
   npm start
   ```

   The app will run on `http://localhost:3000`.

### Servlet Backend

- The servlet backend is located in [servlet_backend/](servlet_backend/).
- Setup and deployment instructions depend on your Java environment and servlet container (e.g., Tomcat).

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser to access the dashboard.
- The frontend communicates with the Flask backend for predictions.
- Ensure both the Flask and React servers are running for full functionality.

---

## Model Artifacts

- Trained model and encoders are stored in [artifacts/](artifacts/).
- The Flask backend loads these artifacts for inference.

---

## Scripts

### React Frontend

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the configuration (irreversible).

See [react_frontend/README.md](react_frontend/README.md) for more details.

### Flask Backend

- `python server.py` — Starts the Flask server.

---

## License

This project is for educational purposes. Please see individual files for license information if applicable.

---

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app)
- Flask
- scikit-learn, pandas, and other Python ML libraries

---

_For more details, refer to the documentation in each subdirectory._
