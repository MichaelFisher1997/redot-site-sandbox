"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
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
  );
}
