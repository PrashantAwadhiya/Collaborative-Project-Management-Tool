import React from 'react';
import { FaSearch, FaBell, FaCommentDots, FaPlus, FaUsers, FaTasks, FaProjectDiagram, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  if (!user) {
    return null; // Hide UserDashboard if no user is logged in
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex min-h-screen`}>
      {/* Sidebar */}
      <aside className="w-64 p-5 bg-gray-800 text-white flex flex-col space-y-4">
        <div className="flex items-center justify-center  w-full">
          <img className='h-10' src="src\assets\favicon.png" alt="logo" />
          <img className='h-20 pt-3' src="src\assets\cover.png" alt="" />
        </div>
        <nav className="flex flex-col space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaTasks /> <span>UserDashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaProjectDiagram /> <span>Projects</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaTasks /> <span>Your Works</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaUsers /> <span>Community</span>
          </a>
        </nav>
        <div className="mt-auto space-y-3">
          <a href="#" className="flex items-center space-x-2 hover:text-purple-400">
            <FaUsers /> <span>New Team</span>
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="flex items-center space-x-2">
            {darkMode ? <FaSun /> : <FaMoon />} <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          <button onClick={handleLogout} className="flex items-center space-x-2 hover:text-purple-400">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center bg-gray-700 p-2 rounded-lg">
            <FaSearch className="text-gray-400" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none ml-2 text-white" />
          </div>
          <div className="flex items-center space-x-4">
            <FaCommentDots />
            <FaBell />
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">P</div>
          </div>
        </header>

        {/* UserDashboard Content */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"></section>
          <div className="bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-bold">Total Projects Done</h3>
            <p className="text-sm text-gray-400">Working on <span className="text-blue-400">0</span> projects</p>
            <div className="w-full bg-gray-700 h-2 mt-2 rounded-full">
              <div className="w-0 bg-blue-400 h-full rounded-full"></div>
            </div>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg">
            <h3 className="text-lg font-bold">Total Task Done</h3>
            <p className="text-sm text-gray-400">0 Tasks are left</p>
            <div className="w-full bg-gray-700 h-2 mt-2 rounded-full">
              <div className="w-0 bg-green-400 h-full rounded-full"></div>
            </div>
          </div>
        

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center space-x-2 text-white">
            <FaPlus /> <span>Create New Project</span>
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg flex items-center space-x-2 text-white">
            <FaPlus /> <span>Create New Team</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
