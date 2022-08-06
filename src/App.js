import React, {useRef, useEffect} from "react";
import { Box } from "@mui/material";
import { Route, Routes,BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";


const App = () => {




  return (
    <Router>
    <Box sx = {{width:'100vw'}}>

      
      <Routes>
        <Route exact path = "/" element = {<Home/>} /> 
        <Route exact path = "/Menu" element = {<Menu/>} /> 
        </Routes>

    </Box>
    </Router>
  );
};

export default App;
