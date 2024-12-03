import React from "react";

function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-900 text-center">
          Our Journey
        </h2>
        <div className="mt-10 space-y-8">
          {/* Timeline Entry 1 */}
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-purple-900 rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-bold">
                1981 - Founding of the Center
              </h3>
              <p className="text-gray-700">
                Don Bosco Iringa was established to empower marginalized youth
                through vocational training.
              </p>
            </div>
          </div>
          {/* Timeline Entry 2 */}
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-purple-900 rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-bold">2000 - Expanded Curriculum</h3>
              <p className="text-gray-700">
                Additional courses in solar energy, electrical engineering, and
                computer training were introduced.
              </p>
            </div>
          </div>
          {/* Timeline Entry 3 */}
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-purple-900 rounded-full mt-2"></div>
            <div>
              <h3 className="text-xl font-bold">2024 - Continuing Growth</h3>
              <p className="text-gray-700">
                Serving thousands of students annually and impacting lives
                across Tanzania and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
