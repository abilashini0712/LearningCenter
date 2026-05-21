import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/course";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = courses.find((c) => c.id === Number(id));

  if (!course) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-fuchsia-50 px-4 sm:px-6 md:px-10 py-8 sm:py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* HERO SECTION */}
            <div className="bg-gradient-to-r from-fuchsia-900 to-fuchsia-700 text-white rounded-3xl p-6 sm:p-8 shadow-lg">

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {course.title}
              </h1>

              <p className="mt-4 sm:mt-5 text-fuchsia-100 leading-7 sm:leading-8 text-base sm:text-lg">
                {course.description}
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">

                <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                  Duration: {course.duration}
                </div>

                <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                  {course.includes.skillLevel}
                </div>

                <div className="bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                  {course.includes.certificate}
                </div>

              </div>

            </div>

            {/* WHAT YOU WILL LEARN */}
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">

              <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-700 mb-6">
                What You Will Learn
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {course.learn.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 bg-fuchsia-50 p-4 rounded-2xl"
                  >

                    <span className="text-fuchsia-700 font-bold text-lg">
                      ✔
                    </span>

                    <p className="text-gray-700 leading-6 sm:leading-7 text-sm sm:text-base">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* COURSE INCLUDES */}
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">

              <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-700 mb-6">
                Course Includes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div className="bg-fuchsia-50 p-4 sm:p-5 rounded-2xl">
                  <p className="text-xs sm:text-sm text-gray-500">Duration</p>
                  <h3 className="text-lg sm:text-xl font-bold text-fuchsia-700 mt-2">
                    {course.duration}
                  </h3>
                </div>

                <div className="bg-fuchsia-50 p-4 sm:p-5 rounded-2xl">
                  <p className="text-xs sm:text-sm text-gray-500">Skill Level</p>
                  <h3 className="text-lg sm:text-xl font-bold text-fuchsia-700 mt-2">
                    {course.includes.skillLevel}
                  </h3>
                </div>

                <div className="bg-fuchsia-50 p-4 sm:p-5 rounded-2xl">
                  <p className="text-xs sm:text-sm text-gray-500">Certificate</p>
                  <h3 className="text-lg sm:text-xl font-bold text-fuchsia-700 mt-2">
                    {course.includes.certificate}
                  </h3>
                </div>

                <div className="bg-fuchsia-50 p-4 sm:p-5 rounded-2xl">
                  <p className="text-xs sm:text-sm text-gray-500">Projects</p>
                  <h3 className="text-lg sm:text-xl font-bold text-fuchsia-700 mt-2">
                    {course.includes.projects}
                  </h3>
                </div>

                <div className="bg-fuchsia-50 p-4 sm:p-5 rounded-2xl sm:col-span-2">
                  <p className="text-xs sm:text-sm text-gray-500">Access</p>
                  <h3 className="text-lg sm:text-xl font-bold text-fuchsia-700 mt-2">
                    {course.includes.access}
                  </h3>
                </div>

              </div>

            </div>

            {/* MODULES */}
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">

              <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-700 mb-6 sm:mb-8">
                Course Modules
              </h2>

              <div className="border rounded-2xl overflow-hidden mb-6">

                <div className="bg-fuchsia-100 px-4 sm:px-6 py-3 sm:py-4 font-bold text-fuchsia-800">
                  1st Semester
                </div>

                <ul className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  {course.modules.semester1.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

              </div>

              <div className="border rounded-2xl overflow-hidden">

                <div className="bg-fuchsia-100 px-4 sm:px-6 py-3 sm:py-4 font-bold text-fuchsia-800">
                  2nd Semester
                </div>

                <ul className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  {course.modules.semester2.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>

              </div>

            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">

              <h2 className="text-xl sm:text-2xl font-bold text-fuchsia-700 mb-6">
                FAQ ❓
              </h2>

              <div className="space-y-5 text-gray-700 text-sm sm:text-base">

                <div>
                  <p className="font-semibold">Will I get a certificate?</p>
                  <p>Yes, after successful completion.</p>
                </div>

                <div>
                  <p className="font-semibold">Is this course beginner friendly?</p>
                  <p>Yes, beginners can easily follow this course.</p>
                </div>

                <div>
                  <p className="font-semibold">Are projects included?</p>
                  <p>Yes, real practical projects are included.</p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="mt-6 lg:mt-0">

            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-6 lg:p-6 sticky lg:top-24">

              <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 text-center">
                {course.fee}
              </h2>

              <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
                Full Course Access
              </p>

              <div className="mt-6 space-y-3 sm:space-y-4">

                <button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-xl font-semibold transition text-sm sm:text-base">
                  Start Course Today
                </button>

                <button className="w-full border border-fuchsia-600 text-fuchsia-700 py-3 rounded-xl font-semibold hover:bg-fuchsia-50 transition text-sm sm:text-base">
                  Add to Wishlist
                </button>

              </div>

              <div className="mt-6 sm:mt-8 space-y-3 text-gray-700 text-sm sm:text-base">

                <p>✔ {course.includes.access}</p>
                <p>✔ {course.includes.certificate}</p>
                <p>✔ {course.includes.skillLevel}</p>
                <p>✔ {course.includes.projects}</p>
                <p>✔ Online Learning</p>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}