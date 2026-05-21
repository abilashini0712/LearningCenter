export default function InstituteInfo() {
  return (
    <section className="bg-fuchsia-100 py-14 sm:py-20 px-4 sm:px-6">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-950">
            About Our Institute
          </h2>

          <p className="text-fuchsia-800 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Global Learning Center provides quality education and
            professional training to help students build successful careers
            in different fields.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-fuchsia-900 mb-3 sm:mb-4">
              Our Mission
            </h3>

            <p className="text-fuchsia-700 leading-7 text-sm sm:text-base">
              We aim to provide practical and modern education for students
              to improve their knowledge and career opportunities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-fuchsia-900 mb-3 sm:mb-4">
              Our Vision
            </h3>

            <p className="text-fuchsia-700 leading-7 text-sm sm:text-base">
              Our vision is to become a trusted learning center that supports
              students in achieving their academic and professional goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-fuchsia-900 mb-3 sm:mb-4">
              Our Courses
            </h3>

            <p className="text-fuchsia-700 leading-7 text-sm sm:text-base">
              We offer courses in Information Technology, Business,
              Design, Languages, Marketing, and many other fields.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}