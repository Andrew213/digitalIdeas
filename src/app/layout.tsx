import "./globals.css";

import type { Metadata } from "next";

import { montserrat } from "./_fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex h-full flex-col bg-blue-100">{children}</body>
    </html>
  );
}
