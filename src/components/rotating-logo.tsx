"use client"

import Link from "next/link"

export function RotatingLogo() {
  return (
    <div className="relative">
      {/* Navigation Links */}
      <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-16">
          <Link
            href="/about"
            className="text-gray-600 font-medium tracking-widest transform -rotate-90 origin-center hover:text-orange-500 hover:scale-110 transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            ABOUT
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-600 font-medium tracking-widest transform -rotate-90 origin-center hover:text-orange-500 hover:scale-110 transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            PORTFOLIO
          </Link>
        </div>
      </div>

      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-16">
          <Link
            href="/contact"
            className="text-gray-600 font-medium tracking-widest transform rotate-90 origin-center hover:text-orange-500 hover:scale-110 transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            CONTACT
          </Link>
          <Link
            href="/strength"
            className="text-gray-600 font-medium tracking-widest transform rotate-90 origin-center hover:text-orange-500 hover:scale-110 transition-all duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            STRENGTH
          </Link>
        </div>
      </div>

      {/* Rotating F Logo */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin-slow">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700"
          >
            <path d="M30 20 L30 100 L40 100 L40 65 L70 65 L70 55 L40 55 L40 30 L80 30 L80 20 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  )
}
