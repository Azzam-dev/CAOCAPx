import { Analytics } from "@vercel/analytics/react";
import ReduxProvider from "../redux/ReduxProvider";
import { CommandPalette, AppBar } from "../components";
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
        <ReduxProvider>
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
        </ReduxProvider>
      </body>
      <Analytics />
    </html>
  );
}
