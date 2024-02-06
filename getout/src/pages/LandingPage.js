import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';


function LandingPage() {
    const navigate = useNavigate(); // Use useNavigate
    const handleSignUp = () => {
        // navigateToSignUp();
        navigate('/createAccount'); // Navigate to the sign-up page
      };
  return (
    <div>
    <h1>Welcome to GetOut!</h1>
     <TextField id="outlined-basic" label="Username" variant="outlined"></TextField>
     <TextField id="outlined-basic" label="Password" variant="outlined"></TextField>
     <Button variant="contained" onClick={() => { console.log('Enter Sign In'); }}>Sign In</Button>
     <Button variant="contained" onClick={handleSignUp}>Create Account</Button>
    </div>
  );
}

export default LandingPage;



