import React from "react";
import Link from "next/link";
import Rehana from "../assets/rehana.png";
import Rehanaa from "../assets/rehanaa.jpg";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 relative overflow-hidden">
      {/* Sidebar Text */}
      <Link href="/portfolio">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm tracking-widest text-xl text-gray-800 hover:text-orange-500 transition-all hover:scale-110">
          PORTFOLIO
        </div>
      </Link>

      {/* Bottom Center Text */}
      <Link href="/strength">
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm tracking-widest text-xl text-gray-800 hover:text-orange-500 transition-all hover:scale-110">
          STRENGTH
        </div>
      </Link>

      {/* Top Nav Text */}
      <Link href="/about">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm tracking-widest text-xl text-gray-800 hover:text-orange-500 transition-all hover:scale-110">
          ABOUT
        </div>
      </Link>

      {/* Right Sidebar Text */}
      <Link href="/contact">
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm tracking-widest text-xl text-gray-800 hover:text-orange-500 transition-all   hover:scale-110">
          CONTACT
        </div>
      </Link>

      {/* Logo */}
      <div className="absolute top-6 left-6">
        <h1 className="w-10 h-10 text-3xl font-bold">R</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-h-screen flex justify-center">
        <img
          src={Rehana.src}
          alt="Rehana Shafi"
          className="w-[300px] md:w-[350px] lg:w-[700px] object-cover"
        />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl md:text-8xl font-bold text-gray-300 leading-tight">
          I<span className="text-black">`</span>m <br />
          <span
            className="bg-clip-text text-transparent bg-cover bg-center"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: `url(${Rehanaa.src})`,
            }}
          >
            Rehana
            <br />
            Shafi
          </span>
        </h1>
      </div>
    </section>
  );
}
