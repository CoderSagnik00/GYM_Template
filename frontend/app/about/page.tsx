// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // This would normally come from authentication state
  // For frontend-only demo, we'll just use local state

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
                profile page 
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link href="/profile" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2 hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link href="/signup" className="block py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}