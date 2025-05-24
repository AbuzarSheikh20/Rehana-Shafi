"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "APNA TAILER", "CONSENTIO", "REPORTER", "BLOG"];

  const projects = [
    {
      id: 1,
      category: "APNA TAILER",
      image: "/placeholder.svg?height=300&width=400",
      title: "Apna Tailer Website",
    },
    {
      id: 2,
      category: "APNA TAILER",
      image: "/placeholder.svg?height=300&width=400",
      title: "Tailer Dashboard",
    },
    {
      id: 3,
      category: "APNA TAILER",
      image: "/placeholder.svg?height=300&width=400",
      title: "Mobile App",
    },
    {
      id: 4,
      category: "CONSENTIO",
      image: "/placeholder.svg?height=200&width=300",
      title: "Tailer Sewing",
    },
    {
      id: 5,
      category: "CONSENTIO",
      image: "/placeholder.svg?height=200&width=300",
      title: "Measurement",
    },
    {
      id: 6,
      category: "CONSENTIO",
      image: "/placeholder.svg?height=200&width=300",
      title: "Fabrics & Design",
    },
    {
      id: 7,
      category: "REPORTER",
      image: "/placeholder.svg?height=300&width=500",
      title: "Reporter Dashboard",
    },
    {
      id: 8,
      category: "BLOG",
      image: "/placeholder.svg?height=300&width=300",
      title: "Blog Platform",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Logo */}
      <Link href={"/"}>
        <div className="absolute top-6 left-6">
          <h1 className="w-10 h-10 text-3xl font-bold">R</h1>
        </div>
      </Link>

      {/* Forward Button */}
      <div className="fixed top-8 right-8 z-10">
        <Link
          href="/"
          className="text-black hover:text-orange-500 transition-colors"
        >
          <ChevronRight size={32} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-black mb-2 hover:text-orange-500 hover:scale-105 transition-all duration-300">
              PORTFOLIO
            </h1>
            <div className="w-32 h-0.5 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-orange-500 font-medium tracking-widest">
              MY WORK
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-medium tracking-wide transition-all duration-300 ${
                    activeFilter === filter
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
