import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Head from 'next/head';
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
      <Head>
        <meta property="og:image" content="/image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="El título de tu página" />
        <meta property="og:description" content="Descripción de tu página" />
      </Head>
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
