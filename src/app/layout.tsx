import type { Metadata } from "next";
import { Inter, Just_Another_Hand } from "next/font/google";
import Head from 'next/head';
import Header from '../components/Header/Header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const justAnotherHand = Just_Another_Hand({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "AdoptAdog Monterrey",
  description: "Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales",
  openGraph: {
    title: "AdoptAdog Monterrey",
    description: "Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales",
    url: "https://www.adoptadogmty.com",
    type: "website",
    images: [
      {
        url: "/image.jpg",
        width: 1200,
        height: 630,
        alt: "AdoptAdog Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdoptAdog Monterrey",
    description: "Centro de Adopciones. Creemos en un mundo mejor con respeto y amor a los animales",
    images: ["/image.jpg"],
  },
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
        <meta property="twitter:image" content="/image.jpg" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
