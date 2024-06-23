import React from 'react';
import Home from './Home/Home';
import Course from './components/Course'; // Assuming you still need this component somewhere else
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses'; // Ensure this is the correct path to the Courses component
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
      
    </>
  );
}

export default App;
