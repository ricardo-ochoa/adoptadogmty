import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdoptAdog  Monterrey",
  description: "Centro de Adopciones Creemos en un mundo mejor con respeto y amor a los animales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
