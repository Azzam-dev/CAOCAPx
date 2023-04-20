import { Analytics } from "@vercel/analytics/react";
import {
  Modal,
  DialogModal,
  LoginModal,
  CommandPalette,
  AppBar,
} from "../components";
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
        <CommandPalette
          projects={[
            "test1",
            "test2",
            "test3",
            "test4",
            "test5",
            "test6",
            "test7",
            "test8",
            "test9",
            "test10",
          ]}
        />
        <AppBar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
