import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Righteous } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const righteous = Righteous({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance App",
  description: "Gerenciador de Finanças",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
