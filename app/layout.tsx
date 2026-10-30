import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan Proctor | Software Developer",
  description:
    "Ethan Proctor is an Edmonton-based software developer. Explore selected websites, applications, and digital projects.",
  openGraph: {
    title: "Ethan Proctor | Software Developer",
    description: "Selected websites, applications, and digital projects.",
    url: "https://proctore.com",
    type: "website"
  }
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
