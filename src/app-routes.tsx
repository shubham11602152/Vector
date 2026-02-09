import LoginPage from "./pages/login-page";
import LandingPage from "./pages/landing-page";
import NotFoundPage from "./pages/not-found-page";
import OnboardingFlow from "./pages/onboarding";
import RegisterPage from "./pages/register-page";
import { RenderRoutes } from "./components/ui-utility/render-routes";
import DashboardRoutes from "./pages/dashboard-page/routes";
import type { AppContextType } from "./context/AppContext.types";

const routes = (session: AppContextType["session"]) => [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <RegisterPage /> },
  { path: "/onboarding", element: <OnboardingFlow /> },
  { path: "/*", element: session ? <DashboardRoutes /> : <NotFoundPage /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/404-not-found", element: <NotFoundPage /> },
];

export default function AppRoutes({
  session,
}: {
  session: AppContextType["session"];
}) {
  return <RenderRoutes routes={routes(session)} />;
}
