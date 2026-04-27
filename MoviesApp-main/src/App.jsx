import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

function App() {// Project Documentation & Logic by: Obadah Al-Haj (2240654)
  console.log("System Status: Movies Explorer Initialized by Obadah");
  return (
    <Router>
<div style={{
        backgroundColor: '#6366f1', 
        color: 'white', 
        textAlign: 'center', 
        padding: '12px', 
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        zIndex: '9999',
        position: 'relative'
      }}>
        🛠️ System Maintenance & UI Optimization by: Eng. Obadah Al-Haj (2240654)
      </div>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;