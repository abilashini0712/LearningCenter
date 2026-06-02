"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center px-3 sm:px-4 mt-4">

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl w-full max-w-6xl px-4 sm:px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <Image
              src="/e-logo.jpeg"
              alt="Global Learning Center"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />

            <div className="leading-tight">

              <h1 className="text-lg sm:text-xl font-bold">

                Global
                <span className="text-fuchsia-600 ml-1">
                  Learning
                </span>

                <span className="ml-1">
                  Center
                </span>

              </h1>

              <p className="text-[11px] sm:text-xs text-gray-500">
                Learn • Grow • Succeed
              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-3">

            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-full hover:bg-fuchsia-100 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/courses"
                className="px-4 py-2 rounded-full hover:bg-fuchsia-100 transition"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-fuchsia-700 text-3xl"
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="md:hidden mt-5 border-t pt-5">

            <ul className="flex flex-col gap-4 text-center">

              <li>
                <Link
                  href="/"
                  className="block py-2 rounded-xl hover:bg-fuchsia-100 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="block py-2 rounded-xl hover:bg-fuchsia-100 transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href=" "
                  className="block py-3 rounded-xl bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

        )}

      </nav>

    </header>
  );
}