"use client";

import { useRouter } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/course";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CoursesPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-fuchsia-50 px-4 sm:px-6 py-10 sm:py-12">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-fuchsia-900 mb-8 sm:mb-10">
          Choose Your Course
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">

          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}