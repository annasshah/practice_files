import { Box,Stack,Typography } from '@mui/material';
// import { Box,Stack,Typography } from '@mui/system';
// import { NavLink } from 'react-router-dom';
import { Route, useNavigate } from "react-router";

import './App.css';

import AppRouter from './config/router';

function App() {
 
  return (

    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
