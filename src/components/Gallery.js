import React from "react";
import { Box, Typography, Stack, Paper, styled } from "@mui/material";
import images from "./SliderData";

import ImageCarousel from "./ImageCarousel";
import Images from "./Images.js";


const Gallery = () => {
  return (
    <Box sx = {{width:'100vw', height:'auto', display:"inline-block", }} className = 'galleryHeight'  >
      <Box
        sx={{
          textAlign:'center',
          width:'100%',
          display:'block',
          
          
        
        }}
        
        
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "calc(3vh + 3vw)",
            fontFamily: "montserratBold",
            color: "#006b3c",
            position:'relative',
            width:'100%',
            marginTop:"0vh",
            borderBottom:'1vh solid #b89400'
            
            
          
            
          }}
          className = 'galleryTitle'

          
        >
          Gallery
        </Typography>
        
      </Box>

      <Box  className = 'gap'>
        {/* <ImageCarousel slides={images} /> */}
        <Images slides={images} /> </Box>
    </Box>
  );
};

export default Gallery;
