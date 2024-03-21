"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import SideNavbar from "@/components/SideNavbar";
import { usePathname } from "next/navigation";
import useAuth from "@/store/store";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const authState = useAuth((state: any) => state.authState);
  console.log("userlay", authState);

  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen min-h-screen max-h-screen bg-white`}
      >
        <Script src="/tinymce/tinymce.min.js" />
        <Navbar />
        <div className="flex gap-4 container">
        {children}
         
        </div>
        <Footer />
      </body>
    </html>
  );
}
