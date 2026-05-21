import Link from "next/link";

export default function Footer() {
  return (

    <footer className="bg-fuchsia-950 text-white px-4 sm:px-6 lg:px-10 py-14 mt-20">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">

              Global
              <span className="text-fuchsia-400 ml-2">
                Learning
              </span>

              <span className="ml-2">
                Center
              </span>

            </h2>

            <p className="mt-5 text-fuchsia-200 leading-8 text-sm sm:text-base max-w-xl">

              Learn modern skills and build your future with professional
              courses in IT, business, design, marketing, communication,
              and many other fields.

            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-fuchsia-200">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-3 text-fuchsia-200 text-sm sm:text-base">

              <p>
                 info@globallearning.com
              </p>

              <p>
                 Colombo, Sri Lanka
              </p>

              

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-fuchsia-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-fuchsia-300 text-sm">

          <p className="text-center md:text-left">
            © 2026 Global Learning Center. All rights reserved.
          </p>

          
        </div>

      </div>

    </footer>
  );
}