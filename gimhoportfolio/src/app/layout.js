import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; // Import the Navbar component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gim Ho | Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* This ensures the Navbar appears on all pages */}
        {children}
      </body>
    </html>
  );
}
