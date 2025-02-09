import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Inter } from 'next/font/google'
 
const inter =  Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}` // For donation 
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/care.svg",
      href: "/care.svg",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}
    </body>
    </html>
  );
}