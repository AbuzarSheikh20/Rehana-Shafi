"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Logo */}
      <Link href={"/"}>
        <div className="absolute top-6 left-6">
          <h1 className="w-10 h-10 text-3xl font-bold">R</h1>
        </div>
      </Link>

      {/* Back Button */}
      <div className="fixed top-8 right-8 z-10">
        <Link
          href="/"
          className="text-black hover:text-orange-500 transition-colors"
        >
          <ChevronLeft size={32} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-black mb-2 hover:text-orange-500 hover:scale-105 transition-all duration-300">
              GET IN TOUCH
            </h1>
            <div className="w-32 h-0.5 bg-orange-500 mx-auto mb-2"></div>
            <p className="text-orange-500 font-medium tracking-widest">
              CONTACT US
            </p>
          </div>

          {/* Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-black hover:text-orange-500 hover:scale-105 transition-all duration-300">
              HOW WE CAN HELP YOU ?
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-none focus:outline-none focus:bg-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-none focus:outline-none focus:bg-white transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-none focus:outline-none focus:bg-white transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-none focus:outline-none focus:bg-white transition-colors resize-none"
              ></textarea>
              <button className="bg-red-500 text-white px-8 py-3 font-medium hover:bg-red-600 transition-colors">
                Submit
              </button>
            </div>

            {/* Right Side - Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22732512234!2d74.00471544999999!3d31.483103349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
