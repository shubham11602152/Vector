import type { ReactNode } from "react";
import Footer from "../ui-blocks/footer";
import Header from "../ui-blocks/header";

type VerticalLayoutProps = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  children: ReactNode;
};

export default function VerticalLayout({
  children,
  hideHeader,
  hideFooter,
}: VerticalLayoutProps) {
  return (
    <>
      {!hideHeader && <Header />}
      <main
        className={`container min-h-[calc(100vh-1rem)] mx-auto ${
          !hideHeader && !hideFooter && "px-4 py-8"
        }`}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}
