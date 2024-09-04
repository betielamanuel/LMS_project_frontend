// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { AuthForm } from "./components/AuthForm/AuthForm"; // Import the AuthForm component

export function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
