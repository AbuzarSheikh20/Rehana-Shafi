import React from "react";
import Rehana from "../../assets/rehana.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-white text-black px-4 md:px-16 pt-12 pb-20">
      {/* Forward Button */}
      <div className="fixed top-8 right-8 z-10">
        <Link
          href="/"
          className="text-black hover:text-orange-500 transition-colors"
        >
          <ChevronRight size={32} />
        </Link>
      </div>
      {/* Logo */}
      <Link href={"/"}>
        <div className="absolute top-6 left-6">
          <h1 className="w-10 h-10 text-3xl font-bold">R</h1>
        </div>
      </Link>

      {/* ABOUT ME */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={Rehana.src}
            alt="About"
            className="w-full max-w-md object-cover shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold">ABOUT ME</h2>
          <p className="text-red-600 text-xs tracking-widest mt-1">WHO AM I</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            I’m a passionate Full Stack Python Developer with over 2 years of
            experience building dynamic and responsive web apps...
            {/* (Truncated for brevity — include the full paragraph from the image as needed) */}
          </p>
          <button className="mt-6 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition">
            Download Resume
          </button>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center">EDUCATION</h2>
        <p className="text-red-600 text-xs tracking-widest text-center">
          LEARNING
        </p>

        <div className="relative mt-12 flex justify-center">
          <div className="border-l-2 border-black absolute left-1/2 transform -translate-x-1/2 h-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* 2017 */}
            <div className="flex justify-end pr-10 relative">
              <div className="text-right max-w-xs">
                <h1 className="hover:text-orange-500 text-4xl font-bold transition">
                  2017
                </h1>
                <h4 className="font-semibold">FSc Pre-Engineering</h4>
                <p className="text-sm text-gray-600">
                  Punjab Group of Colleges
                  <br />
                  Algorithm, Logics, Statistics...
                </p>
              </div>
              <div className="absolute right-[-6px] top-1.5 w-3 h-3 bg-black rounded-full" />
            </div>

            {/* Empty spacer */}
            <div />

            {/* 2021 */}
            <div />
            <div className="flex justify-start pl-10 relative">
              <div className="text-left max-w-xs">
                <h1 className="hover:text-orange-500 text-4xl font-bold transition">
                  2021
                </h1>
                <h4 className="font-semibold">BS Computer Science</h4>
                <p className="text-sm text-gray-600">
                  Punjab University
                  <br />
                  Programming, Data Structures...
                </p>
              </div>
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-black rounded-full" />
            </div>

            {/* 2022 */}
            <div className="flex justify-end pr-10 relative">
              <div className="text-right max-w-xs">
                <h1 className="hover:text-orange-500 text-4xl font-bold transition">
                  2022
                </h1>
                <h4 className="font-semibold">Web Development</h4>
                <p className="text-sm text-gray-600">
                  KICS UET
                  <br />
                  Frontend Development, PHP, Shopify...
                </p>
              </div>
              <div className="absolute right-[-6px] top-1.5 w-3 h-3 bg-black rounded-full" />
            </div>
            <div />

            {/* 2023 */}
            <div />
            <div className="flex justify-start pl-10 relative">
              <div className="text-left max-w-xs">
                <h1 className="hover:text-orange-500 text-4xl font-bold transition">
                  2023
                </h1>
                <h4 className="font-semibold">Application Dev With Laravel</h4>
                <p className="text-sm text-gray-600">
                  Mind Luster
                  <br />
                  Blade Template, Service Container, MVC Model...
                </p>
              </div>
              <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center">EXPERIENCE</h2>
        <p className="text-red-600 text-xs tracking-widest text-center">
          INVOLVEMENT
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
          {[
            {
              year: "2021",
              title: "Software QA",
              company: "Paksol Tech",
              desc: "Worked as Software QA, Manual and Automation testing.",
              time: "Oct 2021 to June 2022",
            },
            {
              year: "2022",
              title: "Laravel PHP Intern",
              company: "Mega Software Technologies",
              desc: "Learned Laravel basics, worked with dev team.",
              time: "July 2022 to Jan 2023",
            },
            {
              year: "2023",
              title: "Laravel Developer",
              company: "Interware PVT",
              desc: "Collaborated with frontend devs to deliver high-quality solutions.",
              time: "Sep 2023 to May 2024",
            },
            {
              year: "2024",
              title: "Full Stack Laravel Developer",
              company: "StepinSolution",
              desc: "Developed full-stack Laravel apps.",
              time: "June 2024 to Present",
            },
          ].map((job, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow">
              <p className="hover:text-orange-500 font-bold transition">
                {job.year}
              </p>
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-700">{job.company}</p>
              <p className="text-xs text-gray-600 mt-1">{job.desc}</p>
              <p className="text-xs text-gray-500 mt-1">{job.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-20 text-sm text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/rehana-shafi-56057a2a2/"
            target="_blank"
            className="hover:text-orange-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:rehanashafi669@gmail.com"
            className="hover:text-orange-500"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:+923245080635"
            className="hover:text-orange-500"
            aria-label="Phone"
          >
            <FaPhone size={20} />
          </a>
          <a
            href="https://github.com/Rehana5-tech"
            target="_blank"
            className="hover:text-orange-500"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Copyright © 2024 Portfolio. All Rights Reserved
        </p>
      </footer>
    </section>
  );
}
