import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll'; 
import { useAuth } from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';
import { RiMenu3Line, RiCloseLine, RiUserFill } from 'react-icons/ri';

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate('/user-dashboard'); // Redirect to UserDashboard after login
  };

  if (location.pathname === '/user-dashboard') {
    return null; // Hide Navbar on UserDashboard page
  }

  return (
    <nav className='absolute top-0 left-0 w-full bg-transparent px-6 md:px-20 py-4 flex justify-between items-center z-50'>
      {/* Logo */}
      <Link to='/' className='logo'>
        <img className='h-14 md:h-20' src="/src/assets/cover.png" alt="WorkSphere" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {/* Navbar Links */}
      <div
        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent text-white md:flex gap-5 text-lg sans-serif p-6 md:p-0 transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Link to="Dashboard" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 block md:inline-block py-2">Home</Link>
        <Link to="Features" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 block md:inline-block py-2">Features</Link>
        <Link to="Benifits" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 block md:inline-block py-2">Benefits</Link>
        <Link to="Team" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400 block md:inline-block py-2">Team</Link>
      </div>

      {/* Sign In / Logout Button */}
      <div className="hidden md:block">
        {user ? (
          <button
            className='rounded-full hover:bg-[#6C12A1] hover:text-white transition px-6 md:px-10 py-1 cursor-pointer border-[#854CE6] text-[#854CE6] border-2'
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className='rounded-full hover:bg-[#6C12A1] hover:text-white transition px-6 md:px-10 py-1 cursor-pointer border-[#854CE6] text-[#854CE6] border-2 flex items-center gap-2'
            onClick={() => setShowLogin(true)}
          >
            <RiUserFill /> Sign In
          </button>
        )}
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
    </nav>
  );
};

export default Navbar;
