import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from './DashboardTemplate';
import StudentCalendar from './StudentCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<DashboardTemplate />} />
            <Route path="/sCalendar" element={<StudentCalendar/>}/>
          </Routes>
        </Router>
  );
}

export default App;
