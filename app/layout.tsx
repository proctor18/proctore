import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "proctore | Ethan Proctor",
  description:
    "The personal site for Ethan Proctor, an Edmonton-based software developer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
