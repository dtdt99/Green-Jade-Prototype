import React from "react";
import { Box, Typography, Stack, Paper, styled } from "@mui/material";
import "../App.css";

import {motion} from 'framer-motion';

const IntroBanner = () => {
  return (
    <Box sx={{ marginTop: "2vh", width:'98vw', height:'85vh', display:'inline-block' }} className = 'mobile'>
      
      <Box
        sx={{
          float: "left",
          width: "40vw",
          display:'inline-block',
        }}
        className = 'introWidth'
      >
        <Typography
        className = 'intro'
        
          sx={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
            // fontSize:"5vw",
            // fontFamily: "Georgia, serif",
          //   fontWeight:"bold",
          //   paddingTop:"8%",
          //   paddingLeft:"12vw",
          //   color:"#006b3c"
          }}

          >
          Avondale's <br />
          Longest<br />
           Running <br />
          Takeaways
        </Typography>
      </Box>
     
      <Box
        sx={{
          float: "left",
          width: "58vw",
          display:'inline-block'
        }}
        className = 'introWidth'
      >
        <img
          style={{
            marginLeft: "10vw",
            objectFit: "cover",
            height: "calc(58vh + 10vw)",
            width: "75%",
            transform:"skew(0deg,3deg)",
            position:'relative',
            top:'2vh'
          }}
          src="../images/test3.jpeg"
          alt="restaurant"
          loading="lazy"

          className = 'introPic'
        />
      </Box>
      

    </Box>
  );
};

export default IntroBanner;
