"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { type IconProps as TablerIconProps } from "@tabler/icons-react";
import { type LucideProps } from "lucide-react";

type IconType =
  | React.FC<TablerIconProps>
  | React.ForwardRefExoticComponent<
      LucideProps & React.RefAttributes<SVGSVGElement>
    >;

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: IconType;
  }[];
}) {
  const navigate = useNavigate();
  const { setOpenMobile } = useSidebar();

  const handleNavigation = (url: string) => () => {
    navigate(url);
    setOpenMobile(false);
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                onClick={handleNavigation(item.url)}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
