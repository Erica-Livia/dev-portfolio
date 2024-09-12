import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar.jsx';
import HomePage from "./HomePage.jsx";
import Footer from "./components/Footer.jsx";
import OnMyRadar from './OnMyRadar.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will always be displayed */}
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/onmyradar" element={<OnMyRadar />} />
        </Routes>
        <Footer /> {/* Footer will always be displayed */}
      </div>
    </Router>
  );
}

export default App;
