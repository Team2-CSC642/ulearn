import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from './DashboardTemplate';
import StudentCalendar from './StudentCalendar';
import InstructorCalendar from './InstructorCalendar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<DashboardTemplate />} />
            <Route path="/sCalendar" element={<StudentCalendar/>}/>
            <Route path="/iCalendar" element={<InstructorCalendar/>}/>
          </Routes>
        </Router>
  );
}

export default App;
