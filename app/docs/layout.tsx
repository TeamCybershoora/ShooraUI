"use client";

import { useState } from "react";
import DocsNavbar from "../../components/docs/Navbar";
import Sidebar from "../../components/docs/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Docs Layout */}
      <div className="pt-16">
        {/* Docs Navbar */}
        <DocsNavbar onSearch={handleSearch} searchQuery={searchQuery} />

        <div className="flex min-h-[calc(100vh-4rem)]">
          {/* Sidebar */}
          <Sidebar searchQuery={searchQuery} />

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-[#030712] pl-[280px] w-[calc(100%-280px)]">
            <div className="w-full max-w-[calc(100%-2rem)] mx-auto px-4">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
