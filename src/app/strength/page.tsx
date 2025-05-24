import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function StrengthSection() {
  return (
    <section className="bg-white text-center text-gray-800 px-4 md:px-16 pt-12">
      {/* Back Button */}
      <div className="fixed top-8 right-8 z-10">
        <Link
          href="/"
          className="text-black hover:text-orange-500 transition-colors"
        >
          <ChevronLeft size={32} />
        </Link>
      </div>
      {/* Logo */}
      <Link href={"/"}>
        <div className="absolute top-6 left-6">
          <h1 className="w-10 h-10 text-3xl font-bold">R</h1>
        </div>
      </Link>
      <div>
        <h2 className="text-3xl font-semibold">WHAT I DO</h2>
        <p className="text-red-600 tracking-widest text-xs mt-1">TAKE A LOOK</p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">
          <div className="relative">
            <img
              src="/images/strength-main.jpg"
              alt="What I Do"
              className="w-[320px] sm:w-[400px] lg:w-[450px] object-cover shadow-lg"
            />
            {/* stacked layers */}
            <div className="absolute top-4 left-4 -z-10 w-full h-full border-2 border-white bg-gray-100" />
            <div className="absolute top-8 left-8 -z-20 w-full h-full border-2 border-white bg-gray-200" />
          </div>

          {/* Right Side Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl">
            <div>
              <h4 className="font-semibold text-orange-500 hover:scale-110 cursor-ointer transition-all duration-300">
                Custom Web Application Development
              </h4>
              <p className="text-sm mt-1 text-gray-600">
                I build tailored, scalable web apps for businesses, focusing on
                functionality and growth.
              </p>
            </div>
            <div>
              <img src="" alt="" />
              <h4 className="font-semibold text-orange-500 hover:scale-110 cursor-ointer transition-all duration-300">
                Back-End Development With Python
              </h4>
              <p className="text-sm mt-1 text-gray-600">
                I create secure, efficient back-end systems, handling database
                management and business logic.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-500 hover:scale-110 cursor-ointer transition-all duration-300">
                API Integration & Development
              </h4>
              <p className="text-sm mt-1 text-gray-600">
                I optimize MySQL and PostgreSQL databases for speed and
                performance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-500 hover:scale-110 cursor-ointer transition-all duration-300">
                SEO & Performance Optimization
              </h4>
              <p className="text-sm mt-1 text-gray-600">
                I implement SEO best practices and optimize site performance for
                faster load times.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BLACK SECTION */}
      <div className="w-full bg-black bg-opacity-70 py-16 mt-20 text-white grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="text-red-600">
          😊
          <br />
          Happy Clients
        </div>
        <div className="text-red-600">
          ✔<br />
          Project Done
        </div>
        <div className="text-red-600">
          🏆
          <br />
          Satisfied{" "}
        </div>
      </div>

      {/* MY SKILLS */}
      <div className="py-16">
        <h2 className="text-3xl font-semibold">MY SKILLS</h2>
        <p className="text-red-600 tracking-widest text-xs mt-1">EXPERT IN</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-10">
          {[
            "Data Science Concepts",
            "Python",
            "Excel",
            "HTML & CSS",
            "AI & ML",
            "Gen AI",
            "Flutter",
            "Github",
          ].map((skill, i) => (
            <div
              key={i}
              className="opacity-70 hover:opacity-100 transition duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto bg-gray-100 flex items-center justify-center">
                {/* Replace with proper skill icons if available */}
                <span className="text-xl">🔧</span>
              </div>
              <p className="mt-3 text-sm">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS */}
      <div className="pb-16">
        <h2 className="text-2xl font-semibold">CLIENTS</h2>
        <p className="text-red-600 tracking-widest text-xs mt-1">WORKED WITH</p>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-70">
          <img src="/images/client1.png" alt="Client1" className="h-8" />
          <img src="/images/client2.png" alt="Client2" className="h-8" />
          <img src="/images/client3.png" alt="Client3" className="h-8" />
          <img src="/images/client4.png" alt="Client4" className="h-8" />
          <img src="/images/client5.png" alt="Client5" className="h-8" />
          <img src="/images/client6.png" alt="Client6" className="h-8" />
        </div>
      </div>
    </section>
  );
}
