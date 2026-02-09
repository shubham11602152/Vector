"use client";

import { BadgeCheck, ChevronsUpDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import useAppContext from "@/hooks/useAppContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Button } from "./ui/button";

type UserMenuProps = {
  compact?: boolean;
  trigger: React.ReactNode;
  side?: "bottom" | "right";
};

type UserInfoProps = {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email?: string;
};

function UserInfo({ user }: { user: UserInfoProps | null }) {
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;
  return (
    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={user?.avatarUrl ?? ""} alt={fullName} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{fullName}</span>
        <span className="truncate text-xs">{user?.email ?? ""}</span>
      </div>
    </div>
  );
}

function UserMenu({ trigger, side = "right" }: UserMenuProps) {
  const { user, logout } = useAppContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={side}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <UserInfo user={user} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function UserTrigger({
  user,
  fullName,
  compact,
  children,
}: {
  user: UserInfoProps | null;
  fullName: string;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={user?.avatarUrl ?? ""} alt={fullName} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      {compact ? null : (
        <>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium capitalize">{fullName}</span>
            <span className="truncate text-xs">{user?.email ?? ""}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </>
      )}
      {children}
    </>
  );
}

export function NavUser({ compact = false }: { compact?: boolean }) {
  const isMobile = useIsMobile();
  const { user } = useAppContext();
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserMenu
          compact={compact}
          side={isMobile ? "bottom" : "right"}
          trigger={
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <UserTrigger user={user} fullName={fullName} compact={compact} />
            </SidebarMenuButton>
          }
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function UserAvatarMenu({ compact = false }: { compact?: boolean }) {
  const { user } = useAppContext();
  const fullName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`;

  return (
    <UserMenu
      compact={compact}
      side="bottom"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <UserTrigger user={user} fullName={fullName} compact={compact} />
        </Button>
      }
    />
  );
}
