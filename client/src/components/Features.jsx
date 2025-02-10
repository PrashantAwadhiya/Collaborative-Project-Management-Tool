import React from "react";

const FeaturesPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#13111C] to-[#13121F] min-h-screen flex flex-col items-center justify-center py-16 px-6 sm:px-8 relative">
      {/* Top div with the "1" */}
      <div className="flex items-center justify-center h-20 w-20 border-4 border-[#306ee8] text-[#306ee8] rounded-full font-semibold text-[36px] absolute -top-10 bg-[#306ee816]">
        1
      </div>
      
      <div className="text-center text-[#306EE8] mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight">
          Our Core Features
        </h2>
        <p className="text-sm sm:text-lg text-amber-50 mt-2 sm:mt-4">
          We provide everything you need to manage projects, collaborate <br /> with
          teams, and track progress efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 items-center justify-center">
        {/* Feature 1: Project Management */}
        <div
          style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }}
          className="border-2 border-[#306ee8] relative rounded-2xl w-full sm:w-[400px] h-[250px] px-6 py-6 sm:px-[42px] sm:py-[24px] hover:shadow-xl transition duration-200 transform hover:scale-105 flex flex-col justify-between"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#8CAEF2] mb-2 sm:mb-4">
            Project Management
          </h3>
          <p className="text-white text-sm sm:text-base flex-grow">
            Efficiently manage tasks, set deadlines, and monitor progress all in
            one place. Keep your projects on track.
          </p>
          <span className="absolute text-3xl sm:text-4xl bottom-4 right-4 text-[#306EE8]">
            <i className="ri-flashlight-fill"></i>
          </span>
        </div>

        {/* Feature 2: Team Collaboration */}
        <div
          style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }}
          className="border-2 border-[#306ee8] relative rounded-2xl w-full sm:w-[400px] h-[250px] px-6 py-6 sm:px-[42px] sm:py-[24px] hover:shadow-xl transition duration-200 transform hover:scale-105 flex flex-col justify-between"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#8CAEF2] mb-2 sm:mb-4">
            Team Collaboration
          </h3>
          <p className="text-white text-sm sm:text-base flex-grow">
            Work together seamlessly with integrated communication tools. Share
            ideas, files, and feedback in real-time.
          </p>
          <span className="absolute text-3xl sm:text-4xl bottom-4 right-4 text-[#306EE8]">
            <i className="ri-team-fill"></i>
          </span>
        </div>

        {/* Feature 3: Community Building */}
        <div
          style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }}
          className="border-2 border-[#306ee8] relative rounded-2xl w-full sm:w-[400px] h-[250px] px-6 py-6 sm:px-[42px] sm:py-[24px] hover:shadow-xl transition duration-200 transform hover:scale-105 flex flex-col justify-between"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#8CAEF2] mb-2 sm:mb-4">
            Community Building
          </h3>
          <p className="text-white text-sm sm:text-base flex-grow">
            Foster collaboration by building a thriving community around your
            projects. Share insights, tips, and resources.
          </p>
          <span className="absolute text-3xl sm:text-4xl bottom-4 right-4 text-[#306EE8]">
            <i className="ri-earth-line"></i>
          </span>
        </div>

        {/* Feature 4: Time Tracking */}
        <div
          style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }}
          className="border-2 border-[#306ee8] relative rounded-2xl w-full sm:w-[400px] h-[250px] px-6 py-6 sm:px-[42px] sm:py-[24px] hover:shadow-xl transition duration-200 transform hover:scale-105 flex flex-col justify-between"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#8CAEF2] mb-2 sm:mb-4">
            Time Tracking
          </h3>
          <p className="text-white text-sm sm:text-base flex-grow">
            Track team time on tasks and projects. Get insights into team
            productivity and optimize workflows.
          </p>
          <span className="absolute text-3xl sm:text-4xl bottom-4 right-4 text-[#306EE8]">
            <i className="ri-line-chart-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
