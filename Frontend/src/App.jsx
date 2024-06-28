import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Courses from './courses/Courses'; // Ensure this is the correct path to the Courses component
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
