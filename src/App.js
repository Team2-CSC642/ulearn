import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from './DashboardTemplate';
import StudentCalendar from './StudentCalendar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<DashboardTemplate />} />
            <Route path="/sCalendar" element={<StudentCalendar/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </Router>
  );
}

export default App;
