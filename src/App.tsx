import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";
import NotFoundPage from "./pages/not-found-page";
import OnboardingFlow from "./pages/onboarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/career-map" element={<DashboardPage />} />
      <Route path="/skill-tracker" element={<DashboardPage />} />
      <Route path="/portfolio" element={<DashboardPage />} />
      <Route path="/mentor" element={<DashboardPage />} />
      <Route path="/opportunity" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/onboarding" element={<OnboardingFlow />} />
    </Routes>
  );
}

export default App;
