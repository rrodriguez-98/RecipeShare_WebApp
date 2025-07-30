import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navigation from './assets/components/Navigation';
import LogIn from './assets/pages/login';
import Settings from './assets/pages/Settings'
import Register from './assets/pages/register';
import Dashboard from './assets/pages/dashboard';
import Dashboard2 from './assets/pages/dashboard2';
import Dashboard3 from './assets/pages/Dashboard3';


function App() {
  // const location = useLocation();
  return (
    <>
      <BrowserRouter>
          <Navigation />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
