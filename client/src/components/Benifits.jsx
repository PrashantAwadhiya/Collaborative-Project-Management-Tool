import React from "react";

const BenifitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-28 px-6 sm:px-8 relative" style={{ background: 'linear-gradient(343.07deg, rgb(19, 17, 28) 5.71%, rgb(25, 19, 37) 64.83%)' }}>
        {/* Top div with the "2" */}
        <div className="flex items-center justify-center h-20 w-20 border-4 border-[#854ce6] text-[#854ce6] rounded-full font-semibold text-[36px] absolute -top-10 bg-[#854ce616] my-12">
        2
      </div>
      <div className="text-center text-[#834CE6] mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight">
          Benefits
        </h2>
        <p className="text-sm sm:text-lg text-amber-50 mt-2 sm:mt-4">
          Discover the many benefits of using our app to manage your personal and team projects.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center justify-center">
        
        {/* Benefit Boxes */}
        {[
          {
            title: "Increased Productivity",
            description: "Effortlessly manage your personal projects and assign tasks to team members while keeping track of progress.",
            icon: "ri-bar-chart-fill"
          },
          {
            title: "Improved Communication",
            description: "Keep everyone on the same page and reduce misunderstandings with clear communication.",
            icon: "ri-question-answer-fill"
          },
          {
            title: "Better Project Outcomes",
            description: "Make informed decisions and track progress to ensure successful project outcomes.",
            icon: "ri-check-double-line"
          },
          {
            title: "Networking Opportunities",
            description: "Connect and collaborate with other developers and professionals in your industry to expand your network and build valuable relationships.",
            icon: "ri-group-fill"
          }
        ].map((benefit, index) => (
          <div 
            key={index}
            style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }} 
            className="border-2 border-[#306EE8] relative rounded-2xl w-full sm:w-[400px] h-[250px] px-6 py-6 sm:px-[42px] sm:py-[24px] hover:shadow-xl transition duration-200 transform hover:scale-105 flex flex-col justify-between"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[#834CE6] mb-2 sm:mb-4">
              {benefit.title}
            </h3>
            <p className="text-white text-sm sm:text-base flex-grow">
              {benefit.description}
            </p>
            <span className="absolute text-3xl sm:text-4xl bottom-4 right-4 text-[#834CE6]">
              <i className={benefit.icon}></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenifitsPage;
