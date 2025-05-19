// src/components/Shared/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold text-gray-800">
              BioDashboard
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Experiments
            </Link>
            <Link href="#" className="text-gray-800 hover:text-blue-600">
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
