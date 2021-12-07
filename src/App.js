import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from './DashboardTemplate';
import StudentCalendar from './StudentCalendar';
import Home from './Home';
import InstructorCalendar from './InstructorCalendar';
import InstructorCalendarClass from './InstructorCalendarClass';
import StudentCalendarClass from './StudentCalendarClass';
import Login from './loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<DashboardTemplate />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" exact element={<Login />} />
            <Route path="/sCalendar" exact element={<StudentCalendar/>}/>
            <Route path="/iCalendar" exact element={<InstructorCalendar/>}/>
            <Route path="/iCalendarClass" element={<InstructorCalendarClass/>}/>
            <Route path="/sCalendarClass" element={<StudentCalendarClass/>}/>
          </Routes>
        </Router>
  );
}

export default App;
