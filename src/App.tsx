import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dealers from './pages/Dealers';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Track from './pages/Track';
import Settings from './pages/Settings';
import Home from './pages/Home';
import SignIn from './pages/Auth/login';
import Register from './pages/Auth/Register';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<Register />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/track" element={<Track />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App