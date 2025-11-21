import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DashboardBreadcrumbs() {
  // Use react-router-dom to get the current location
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const segments = path.split("/").filter(Boolean);

  // Build breadcrumb items
  const items = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    const isLast = idx === segments.length - 1;
    const segmentName = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const onClickNavigate =
      (href: string) =>
      (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        // Programmatic navigation can be added here if needed
        navigate(href);
      };

    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{decodeURIComponent(segmentName)}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink onClick={onClickNavigate(href)}>
              {decodeURIComponent(segmentName)}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>{items}</BreadcrumbList>
    </Breadcrumb>
  );
}
