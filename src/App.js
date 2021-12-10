import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import StudentCalendar from './StudentCalendar';
import StudentTaskList from './StudentTaskList';
import Home from './Home';
import InstructorCalendar from './InstructorCalendar';
import InstructorCalendarClass from './InstructorCalendarClass';
import StudentCalendarClass from './StudentCalendarClass';
import Login from './loginPage';
import Quiz from './Quiz';
import InstructorTaskList from './InstructorTaskList';
import Grading from './Grading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/sTaskList" exact element={<StudentTaskList />} />
            <Route path="/iTaskList" exact element={<InstructorTaskList />} />
            <Route path="/sCalendar" exact element={<StudentCalendar/>}/>
            <Route path="/iCalendar" exact element={<InstructorCalendar/>}/>
            <Route path="/iCalendarClass" element={<InstructorCalendarClass/>}/>
            <Route path="/sCalendarClass" element={<StudentCalendarClass/>}/>
            <Route path="/createQuiz" element={<Quiz/>}/>
            <Route path="/grading" element={<Grading/>}/>
          </Routes>
        </Router>
  );
}

export default App;
