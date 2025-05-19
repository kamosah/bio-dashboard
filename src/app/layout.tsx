// src/app/layout.tsx - Root layout
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biological Data Dashboard",
  description: "A dashboard for visualizing protein folding experiments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
