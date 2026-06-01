"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/course";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 3;

  // Filter courses
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(
    filteredCourses.length / coursesPerPage
  );

  const startIndex = (currentPage - 1) * coursesPerPage;

  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-fuchsia-50 px-4 sm:px-6 py-10 sm:py-12">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-fuchsia-900 mb-8">
          Choose Your Course
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {currentCourses.length > 0 ? (
            currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg disabled:bg-gray-300"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-fuchsia-700 text-white"
                    : "bg-white border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg disabled:bg-gray-300"
            >
              Next
            </button>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}