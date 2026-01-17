/**
 * Utility component to render routes from a routes array.
 */
import React from "react";
import { Route, Routes } from "react-router-dom";

type RouteObject = {
  path: string;
  element: React.ReactNode;
};

type RenderRoutesProps = {
  routes: RouteObject[];
};

export function RenderRoutes({ routes }: RenderRoutesProps) {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
