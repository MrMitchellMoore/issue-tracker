import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

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
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
