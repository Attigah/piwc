import type { Metadata } from "next";
import { Inter } from "next/font/google"; //inter for 70% of layouts
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); //check subsets

export const metadata: Metadata = {
  title: "PIWC ATOMIC CMS",
  description: "Next.js Church Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
   children: React.ReactNode; // children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
