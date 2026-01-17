import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Navigate } from "react-router-dom";
import SneakPeers from "../sneak-peers-page";
import DashboardPage from ".";
import ProfilePage from "../profile-page";
import { RenderRoutes } from "@/components/ui-utility/render-routes";
import DashboardLayout from "@/components/layouts/dashboard-layout";

const routes = [
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/career-map", element: <DashboardPage /> },
  { path: "/skill-tracker", element: <DashboardPage /> },
  { path: "/portfolio", element: <DashboardPage /> },
  { path: "/sneak-peers", element: <SneakPeers /> },
  { path: "/mentor", element: <DashboardPage /> },
  { path: "/opportunity", element: <DashboardPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/*", element: <Navigate to="/404-not-found" replace /> },
];

function DashboardRoutes() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <DashboardLayout>
        <RenderRoutes routes={routes} />
      </DashboardLayout>
    </SidebarProvider>
  );
}
export default DashboardRoutes;
