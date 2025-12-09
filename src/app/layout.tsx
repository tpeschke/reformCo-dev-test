import type { Metadata } from "next";
import "./css/reset.css"
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Peschke Dev Test",
  description: "For ReformCo"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
