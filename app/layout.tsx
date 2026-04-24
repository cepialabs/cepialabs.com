import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CepiaLabs | Inventive | Innovative | Cognitive",
  description:
    "Enterprise-grade AI, Data Science, and Analytics solutions designed for scalable business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
