import Link from "next/link";
import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 hover:shadow-xl transition">

      <h2 className="text-lg sm:text-xl font-bold text-fuchsia-700">
        {course.title}
      </h2>

      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        {course.description}
      </p>

      <div className="mt-4 text-xs sm:text-sm text-gray-700 space-y-1">
        <p><b>Duration:</b> {course.duration}</p>
        <p><b>Fee:</b> {course.fee}</p>
      </div>

      <Link href={`/courses/${course.id}`}>
        <button className="mt-5 w-full bg-fuchsia-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-fuchsia-700 transition">
          View Details
        </button>
      </Link>

    </div>
  );
}