import type { Metadata } from "next";
import "./css/reset.css"
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Peschke Dev Test",
  description: "For ReformCo"
};

import localFont from 'next/font/local'
 
const sohne = localFont({
  src: '../../public/fonts/Söhne-Buch.otf',
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sohne.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
