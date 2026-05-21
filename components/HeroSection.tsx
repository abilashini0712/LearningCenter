"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-fuchsia-50 px-4 sm:px-6">
      
      <div className="max-w-4xl text-center">
        
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-fuchsia-700 font-semibold mb-4 tracking-wide text-sm sm:text-base md:text-lg"
        >
          Welcome to Global Learning Center
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-fuchsia-950 leading-tight"
        >
          Learn Skills <br />
          Build Your Future
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 text-fuchsia-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0"
        >
          Explore professional courses in IT, business, design,
          language learning, and many more to grow your career.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 sm:mt-10"
        >
          <Link href="/courses">
            <button className="bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition duration-300 shadow-lg">
              Get Start The Lesson
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}