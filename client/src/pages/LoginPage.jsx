import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import CreateAccountPage from './CreateAccountPage'; // Import the component
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ closeModal }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false); // Toggle state

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('user', username);
      closeModal();
      navigate('/user-dashboard'); // Redirect to UserDashboard after login
    }
  };

  // ✅ Show CreateAccountPage when showCreateAccount is true
  if (showCreateAccount) {
    return <CreateAccountPage closeModal={() => setShowCreateAccount(false)} />;
  }

  return (
    <div className='flex flex-col items-center bg-white p-6 md:p-8 rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg'>
      {/* Title */}
      <h1 className='text-2xl md:text-3xl font-bold mb-3 text-gray-900'>Welcome Back!</h1>
      <h2 className='text-lg md:text-xl font-semibold mb-5 text-gray-700'>Login</h2>

      {/* Google Sign-In */}
      <button className='flex items-center justify-center w-full px-4 py-2 border rounded-lg mb-4 bg-white shadow-md hover:bg-gray-100 transition'>
        <FcGoogle className='mr-2 text-xl' /> Sign in with Google
      </button>

      {/* Username Input */}
      <input 
        type='text' 
        placeholder='Username' 
        className='w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none'
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Password Input */}
      <div className='relative w-full'>
        <input 
          type={passwordVisible ? 'text' : 'password'} 
          placeholder='Password' 
          className='w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          onClick={() => setPasswordVisible(!passwordVisible)} 
          className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 hover:underline'
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
      </div>

      {/* Forgot Username */}
      <button className='text-blue-500 text-sm mt-2 mb-4 hover:underline'>Forgot Username?</button>

      {/* Login Button */}
      <button 
        className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition'
        onClick={handleLogin}
      >
        Login
      </button>

      {/* Create Account Button */}
      <button 
        className='w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition mt-4'
        onClick={() => {
          console.log("Create Account Clicked!");
          setShowCreateAccount(true);
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default LoginPage;
