import React from "react";
import { Box, Typography } from "@mui/material";
const AboutBanner = () => {
  return (
    <Box sx = {{width:'100vw', height:'65vh', display:'inline-block',  }} className = "aboutHeight" >

      <Box sx={{ float: "left", width: "40vw", height: "auto", textAlign:'center',justifyContent:'center', }} className = 'aboutBlock' >
        
        <Typography
          sx={{
            marginLeft: "0vw",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-block",
            textAlign:'center',
            borderBottom: "solid #b89400 1vh",
            fontFamily: "montserratBold",
            color: "#006b3c",
            fontWeight: "bold",
            fontSize: "calc(1.8vw + 1.8vh)",
            width: "24vw",
            position:'relative',
            top:'calc(0vh - 6vh - 1vw)',
            
            
            

          }}
          className = 'aboutTitle'
          
        >
          About Us
        </Typography>
        <Typography
          sx={{
            marginTop: "1vh",
            marginLeft: "4vw",
            color: "#006b3c",
            fontWeight: "bold",
            width: "33vw",
            fontSize:'calc(0.8vw + 0.8vh)',
            position:'relative',
            top:'calc(0vh - 6vh - 1vw)',
            fontFamily:'montserratBold'
           
            
          
            
          }}
          className = 'aboutText' 
          
        >
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
          Description Description Description Description Description
        
          
          
        </Typography>
      </Box>

      <Box sx={{ float: "left", width: "60vw", }} className = 'aboutBlock1' >
        <img
          style={{
            objectFit: "cover",
            height: "calc(50vh + 15vw)",
            width: "90%",
            transform: "skew(0deg,3deg)",
            position: "relative",
            top: "-20vh",
          }}
          src="../images/test7.jpeg"
          alt="restaurant"
          loading="lazy"
          className = 'aboutPic'
        />
      </Box>
    
    </Box>
  );
};

export default AboutBanner;
