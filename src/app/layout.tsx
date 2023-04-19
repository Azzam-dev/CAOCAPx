import { Analytics } from "@vercel/analytics/react";
import { AppBar } from "../components";
import "../styles/globals.css";

export const metadata = {
  title: "CAOCAPx",
  description: "Explore, Build & Collaborate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
