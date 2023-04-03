import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
