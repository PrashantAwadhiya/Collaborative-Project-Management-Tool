import React from 'react';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate('/user-dashboard'); // Redirect to UserDashboard after login
  };

  return (
    <div className='container h-[95vh] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-6 md:px-18 py-8 md:py-18 '>
      {/* Left Section */}
      <div className='flex flex-col gap-6 md:gap-8 items-start w-full md:w-1/2 text-center md:text-left'>
        <h1 className='text-4xl md:text-[70px] font-bold text-[#F2F3F4] leading-tight md:leading-[75px]'>
          Power Your Projects with Our App.
        </h1>
        <p className='text-[#868D94] text-sm md:text-base'>
          Take control of your projects and stay on top of your goals with our intuitive project management app. Say goodbye to chaos and hello to streamlined efficiency. Try it now and experience the difference.
        </p>
        <button 
          onClick={() => setShowLogin(true)}
          className='text-lg md:text-xl cursor-pointer border-none bg-gradient-to-r from-[#801AE6] to-[#A11AE5] text-[#F2F3F4] px-8 md:px-16 py-2 md:py-3 rounded-xl font-bold mt-2 md:mt-4'
        >
          Make a New Project
        </button>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex justify-center'>
        <img 
          className='h-[300px] w-[300px] md:h-[500px] md:w-[500px] object-contain'
          src="/src/images/dashboard.png" 
          alt="Dashboard Illustration" 
        />
      </div>

      {/* Login Popup */}
      {showLogin && (
        <div
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center p-4 z-50 backdrop-blur-sm inset-0 '
          onClick={() => setShowLogin(false)}
        >
          <div
            className='bg-white p-6 md:p-8 rounded-xl shadow-lg relative bg-opacity-90 max-w-md w-full'
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className='absolute top-4 right-4 text-black text-xl'
              onClick={() => setShowLogin(false)}
            >
              X
            </button>
            <LoginPage closeModal={handleLoginSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
