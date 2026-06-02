"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/course";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

const [selectedCategory, setSelectedCategory] =
  useState("All");

  const coursesPerPage = 3;

  // Filter courses
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase() .includes(search.toLowerCase());


    const matchesCategory = selectedCategory === "All" ||
    course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  // Pagination
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

      <div className="min-h-screen bg-fuchsia-50 px-4 sm:px-6 py-10">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-fuchsia-900 mb-8">
          Choose Your Course
        </h1>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
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

        {/* Sidebar + Cards Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-md p-5 h-fit">


    <div className="flex flex-col gap-3">

  <h2 className="text-xl font-bold text-fuchsia-700 mb-2">
    Course Categories
  </h2>

  {[
    "All",
    "Technology",
    "Design",
    "Language",
    "Marketing",
  ].map((category) => (
    <button
      key={category}
      onClick={() => {
        setSelectedCategory(category);
        setCurrentPage(1);
      }}
      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
        selectedCategory === category
          ? "bg-fuchsia-600 text-white shadow-md"
          : "bg-gray-50 text-gray-700 hover:bg-fuchsia-100 hover:text-fuchsia-700"
      }`}
    >
      {category}
    </button>
  ))}

</div>

          </aside>

          {/* Course Cards */}
          <div className="flex-1">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {currentCourses.length > 0 ? (
                currentCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
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
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                  className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg disabled:bg-gray-300"
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        setCurrentPage(i + 1)
                      }
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === i + 1
                          ? "bg-fuchsia-700 text-white"
                          : "bg-white border"
                      }`}
                    >
                      {i + 1}
                    </button>
                  )
                )}

                <button
                  disabled={
                    currentPage === totalPages
                  }
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                  className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}