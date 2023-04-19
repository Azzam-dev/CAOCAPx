import { Analytics } from "@vercel/analytics/react";
import { Modal, DialogModal, AppBar, NavBar } from "../components";
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
        <Modal
          isOpen
          title="Hello World"
          actionLabel="Submit"
          // secondaryAction={() => {}}
          // secondaryActionLabel="Close"
        />

        {/* <DialogModal isOpen /> */}
        <AppBar />
        {children}
        <NavBar />
      </body>
      <Analytics />
    </html>
  );
}
