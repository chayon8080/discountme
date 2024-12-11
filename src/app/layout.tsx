"use client";  // This marks the file as a Client Component

import { useState, useEffect, ReactNode } from "react"; // Import React hooks
import { usePathname } from "next/navigation";  // Use usePathname from next/navigation for pathname
import AuthNavbar from "@/components/shared/AuthNavbar/AuthNavbar";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const authPages = ["/signin", "/register", "/forgot-password", "/reset-password"];
    setIsAuthPage(authPages.includes(pathname)); 
  }, [pathname]);

  return (
    <html lang="en" className="bg-{#F8FAFC}">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {isAuthPage ? <AuthNavbar /> : <Navbar />}
          <main>{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
