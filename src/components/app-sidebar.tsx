"use client";

import * as React from "react";
import { Target, MapIcon, StarIcon, User } from "lucide-react";

import {
  IconDashboard,
  IconEyeSpark,
  IconHelp,
  IconInnerShadowTop,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import useAppContext from "@/context/useAppContext";
import { NavSecondary } from "./nav-secondary";
import { Link } from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Career Map",
      url: "/career-map",
      icon: MapIcon,
    },
    {
      title: "Skill Tracker",
      url: "/skill-tracker",
      icon: Target,
    },
    {
      title: "Sneak Peers",
      url: "/sneak-peers",
      icon: IconEyeSpark,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: User,
    },
    {
      title: "Mentor",
      url: "/mentor",
      icon: IconUsers,
    },
    {
      title: "Opportunity",
      url: "/opportunity",
      icon: StarIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAppContext();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Vector</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
