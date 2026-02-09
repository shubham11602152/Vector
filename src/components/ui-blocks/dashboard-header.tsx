import React, { useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DashboardBreadcrumbs from "../dashboard-breadcrumbs";
import { Button } from "@/components/ui/button";
import { Home, LogOut } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import { Link } from "react-router-dom";
import { UserAvatarMenu } from "@/components/nav-user";
import useAppContext from "@/hooks/useAppContext";
import { useIsMobile } from "@/hooks/useIsMobile";

const HeaderRightItems = [
  {
    name: "home",
    render: () => (
      <Link to="/dashboard">
        <Button aria-label="logout" variant="default" size="sm">
          <Home />
          Home
        </Button>
      </Link>
    ),
  },
  {
    name: "mode-toggle",
    render: () => <ModeToggle />,
  },
  { name: "user-menu", render: () => <UserAvatarMenu compact /> },
  {
    name: "logout",
    render: function LogoutButton() {
      const { logout } = useAppContext();
      return (
        <Button
          aria-label="logout"
          variant="ghost"
          size="icon"
          className="size-7"
          onClick={logout}
        >
          <LogOut />
          <span className="sr-only">Logout</span>
        </Button>
      );
    },
  },
];

function DashboardHeader() {
  const isMobile = useIsMobile();

  const filteredHeaderRightItems = useMemo(
    () =>
      isMobile
        ? HeaderRightItems.filter((_) => _.name != "logout")
        : HeaderRightItems,
    [isMobile]
  );
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <DashboardBreadcrumbs />
      </div>
      <div className="flex items-center gap-2 px-4">
        {filteredHeaderRightItems.map((item, index) =>
          index === 0 || isMobile ? (
            <React.Fragment key={index}>{item.render()}</React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4"
              />
              {item.render()}
            </React.Fragment>
          )
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;
