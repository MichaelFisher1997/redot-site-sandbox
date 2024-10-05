"use client"
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const newsRef = useRef<HTMLDivElement>(null);

  const scrollToNews = () => {
    if (newsRef.current) {
      newsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <nav className="bg-black text-white px-6 py-4 flex justify-between item-center">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
          <div className="relative">
            <button
              className="hover:text-gray-300 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Overview
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
              </ul>
            )}
          </div>
          <a href="#" className="hover:text-gray-300">Documentation</a>
          <a href="#" className="hover:text-gray-300">News</a>
          <a href="#" className="hover:text-gray-300">Assets</a>
        </div>

        {/* Right Side */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Contribute
          </a>
          <a
            href="#"
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Donate
          </a>
          <a
            href="#"
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition"
          >
            Download
          </a>
        </div>
      </nav>

      <section
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: 'url("/images/forest-background.png")' }} // replace with your background image path
      >
        <div className="text-center bg-black bg-opacity-70 p-10 rounded-lg">
          <Image src="/images/big-white-logo.svg" alt="ReDOT Logo" width={150} height={150} className="mx-auto mb-6" />
          <h1 className="text-white text-2xl font-bold">Open-source game engine for everyone.</h1>
          <p className="text-gray-300 my-4">No strings attached.</p>
          <a
            href="#"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500 transition inline-block"
          >
            Download →
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <button
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-50 bg-black bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-75 transition-all"
          onClick={scrollToNews}
          aria-label="Scroll to news section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </section>

      {/* News Section */}
      <section ref={newsRef} className="bg-black text-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10">Recent News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example News Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <img src="/no-image.png" alt="No Image" className="mb-4" />
              <h3 className="text-xl font-bold mb-2">ReDOT got released!</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <a href="#" className="text-red-600 hover:underline">Read post →</a>
            </div>

            {/* Repeat for other news items */}
          </div>

          <div className="mt-10 text-right">
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
              More news →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
