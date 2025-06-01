# Frontend for Movie Recommendation App

This is the frontend for the Movie Recommendation App, built using React. It communicates with a Flask backend to fetch movie recommendations for users.

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**

### Installation
Clone the repository and install dependencies:
```sh
git clone <repository-url>
cd frontend
npm install   # or yarn install
```

### Running the Development Server
Start the frontend application:
```sh
npm start   # or yarn start
```
The app will be available at **http://localhost:3000**.

#### API Configuration
Backend Flask server is running at **http://127.0.0.1:5000**. The frontend makes API calls to endpoints like:
```
GET http://127.0.0.1:5000/GetMovieRecommendations/:username
```


## 🛠 Technologies Used
- **React.js** (Frontend framework)
- **Axios** (HTTP requests)
- **React Router** (Navigation)

