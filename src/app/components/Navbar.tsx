"use client";


import Link from 'next/link';

export default function Navbar() {

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Título */}
        <h1 className="text-2xl font-bold">
          
            Fusion Fabrics
          
        </h1>

        {/* Menú de navegación */}
        <nav className="flex items-center gap-4">
          <Link href="/analyze" className="hover:text-blue-200">
            Analyze
          </Link>
          <Link href="/design" className="hover:text-blue-200">
            Design
          </Link>
          <Link href="/library" className="hover:text-blue-200">
            Library
          </Link>

         
        </nav>
      </div>
    </header>
  );
}