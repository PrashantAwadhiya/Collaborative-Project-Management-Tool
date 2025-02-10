import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { AuthProvider } from './context/AuthContext';
import { BoardProvider } from './context/BoardContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import Features from './components/Features';
import UserDashboard from './pages/UserDashboard';
import BenifitsPage from './components/Benifits';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/user-dashboard' && <Navbar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        {/* ...existing routes... */}
      </Routes>
      {location.pathname !== '/user-dashboard' && (
        <>
          <div>
            <Element name='Features'>
              <Features />
            </Element>
          </div>
          <div>
            <Element name='Benifits'>
              <BenifitsPage />
            </Element>
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BoardProvider>
        <Router>
          <AppContent />
        </Router>
      </BoardProvider>
    </AuthProvider>
  );
}

export default App;
