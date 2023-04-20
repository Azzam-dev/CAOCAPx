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
          paths={[
            "home",
            "about",
            "blog",
            "landing",
            "login",
            "signup",
            "hexcoin",
            "notifications",
            "profile",
            "profile/settings",
            "profile/settings/editProfile",
          ]}
        />
        <AppBar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
