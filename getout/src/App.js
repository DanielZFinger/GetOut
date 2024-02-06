import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateAccount from './pages/CreateAccount';


function App() {
  const navigate = useNavigate(); // Get the navigation function
  return (
    <div>

      <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>

    </div>
  );
}

export default App;
