"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
// app/layout.tsx
import 'prismjs/themes/prism-tomorrow.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-paralucent bg-[#0a0f1e] text-white antialiased">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
