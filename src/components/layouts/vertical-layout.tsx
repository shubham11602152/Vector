import React from "react";
import Header from "../ui-blocks/header";
import type { ReactNode } from "react";

type VerticalLayoutProps = {
  children: ReactNode;
};

export default function VerticalLayout({ children }: VerticalLayoutProps) {
  return (
    <>
      <Header />
      <main className="container min-h-[calc(100vh-4rem)] mx-auto px-4 py-8">
        {children}
      </main>
    </>
  );
}
