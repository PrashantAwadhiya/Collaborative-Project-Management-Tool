import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = ({ closeModal }) => {
  const navigate = useNavigate(); // Redirect function
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if(email.includes('@gmail.com')){
      localStorage.setItem('user', username);
      localStorage.setItem('email', email);
      navigate('/user-dashboard'); // Redirect to UserDashboard after account creation
      closeModal(); // Close modal after successful account creation
      // Clear form fields after successful account creation
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Display success message after account creation
      alert('Account created successfully!');
    } else {
      alert('Please enter a valid Gmail address!');
    }
  };

  return (
    <div className='flex flex-col items-center bg-white p-6 md:p-8 rounded-xl w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg'>
      {/* Title */}
      <h1 className='text-2xl md:text-3xl font-bold mb-3 text-gray-900'>Create Account</h1>
      <h2 className='text-lg md:text-xl font-semibold mb-5 text-gray-700'>Sign Up</h2>

      {/* Username Input */}
      <input
        type='text'
        placeholder='Username'
        className='w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Email Input */}
      <input
        type='email'
        placeholder='Gmail'
        className='w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <input
        type='password'
        placeholder='Password'
        className='w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Confirm Password */}
      <input
        type='password'
        placeholder='Confirm Password'
        className='w-full border px-4 py-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 outline-none'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Submit Button */}
      <button
        className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition'
        onClick={handleSubmit}
      >
        Sign Up
      </button>

      {/* Back Button */}
      <button
        className='w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition mt-4'
        onClick={closeModal}
      >
        Back
      </button>
    </div>
  );
};

export default CreateAccountPage;
