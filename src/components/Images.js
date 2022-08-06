import React from "react";
import {
  Box,
  Typography,
  Stack,
  ImageList,
  ImageListItem,
  useMediaQuery
} from "@mui/material";

const Images = ({ slides }) => {
  const matches = useMediaQuery('(max-width:1000px)');
  return (
    <Box
      sx={{
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width:'100vw',
        position:'relative',
        top:'0vh',
    
      }}
      className = 'galleryBlock'

      
    >
      
      <ImageList
        sx={{ marginBottom: '10%',width: "90vw", height: "80%"
         }}
         cols = {matches?1:3}
        rowHeight='galleryPic'
        variant="quilted"

        className = 'galleryImagesBlock'

        
      >
        {slides.map((item) => (
          <ImageListItem key={item.src}>
            <img
              style={{ borderRadius: "0px", transform: "skew(0deg,0deg)" }}
              src={item.src}
              alt={item.src}
              loading="lazy"
              className = 'galleryImages'
            
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Images;
