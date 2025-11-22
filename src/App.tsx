import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import LandingPage from "./pages/landing-page";
import OnboardingFlow from "./pages/onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/onboarding" element={<OnboardingFlow />} />
    </Routes>
  );
}

export default App;
