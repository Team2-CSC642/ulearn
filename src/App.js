import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from './DashboardTemplate';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" exact element={<DashboardTemplate />} />
          </Routes>
        </Router>
  );
}

export default App;
