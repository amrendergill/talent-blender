"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import SideNavbar from "@/components/SideNavbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Candidate Hub",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="/tinymce/tinymce.min.js" />
        <Navbar />
        <div className="flex h-full mt-6 gap-4 px-36 container">
          <aside
            className={`sticky top-[94px] flex-1   shrink-0 h-full  ${
              pathname.includes("/auth") ? "hidden" : "block"
            }`}
          >
            <SideNavbar />
          </aside>

          <main className="w-full mb-24 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
