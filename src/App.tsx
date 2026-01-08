import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";
import NotFoundPage from "./pages/not-found-page";
import OnboardingFlow from "./pages/onboarding";
import ProfilePage from "./pages/profile-page";
import SneakPeers from "./pages/sneak-peers-page";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import RegisterPage from "./pages/register-page";

function DashboardRoutes() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/career-map" element={<DashboardPage />} />
        <Route path="/skill-tracker" element={<DashboardPage />} />
        <Route path="/portfolio" element={<DashboardPage />} />
        <Route path="/sneak-peers" element={<SneakPeers />} />
        <Route path="/mentor" element={<DashboardPage />} />
        <Route path="/opportunity" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<Navigate to="/404-not-found" replace />} />
      </Routes>
    </SidebarProvider>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/onboarding" element={<OnboardingFlow />} />
      <Route path="/" element={<LandingPage />} />
      {/* Dashboard routes with persistent sidebar */}
      <Route path="/*" element={<DashboardRoutes />} />
      {/* NotFound Page route should be placed at the end */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/404-not-found" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
