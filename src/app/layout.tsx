import SidebarContextProvider from "@/contexts/sidebar-context";
import ThemeContextProvider from "@/contexts/theme-context";
import "@/styles/styles.scss";
import "@/styles/tailwind.css";
import { Metadata } from "next";
import React from "react";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { MainHeader } from "../components";

export const metadata: Metadata = {
  title: "Property Rentals",
  description: "Property Rentals Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body suppressHydrationWarning={true} className="bg-white text-zinc-900">
        <ThemeContextProvider>
          <SidebarContextProvider>
            <MainHeader />

            <CustomProvider>{children}</CustomProvider>
          </SidebarContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
