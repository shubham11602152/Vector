import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
