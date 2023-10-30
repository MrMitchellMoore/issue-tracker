import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Squash Bugs like a pro!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
