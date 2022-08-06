import React from "react";
import { Box } from "@mui/material";
import { Link  } from "react-router-dom";
import { Typography } from "@mui/material";


const Navbar = ({ about, menu, scroll, contact }) => {

  

  return (
    <Box
      sx={{ borderBottom: "solid #b89400 0.5vh", height: "auto", width: "auto", display:'block'}}
      className = 'navHeight'
    >
      <Box
        sx={{
         
          width: "100vw",
          height: "8vh",
          display:'block'
        }}
        className = 'navBlock'
        
      >
        <Typography
          
          variant="h3"
          sx={{
            marginTop:'4vh',
            color: "#006b3c",
            fontFamily: "radicalis",
            fontWeight: "bold",
            width: "100%",
            fontSize: "calc(3.3vh + 3.3vw)",
            textAlign:'center',
          }}
          className = 'title'
          
        >
          <Link
            to="/"
            alt="Home"
            style={{
              cursor: "pointer",
              color: "inherit",
              textDecoration: "inherit",
            }}
            className = 'title'
          >
            Green Jade Takeaways
          </Link>
        </Typography>
      </Box>

    





      <Box
        sx={{
          // float: "left",
          // width: "45vw",
          // position: "relative",
          // left: "18vw",
          display:'block',
          textAlign:'center',
          margin:'auto',
          width:'100%'
          
          
        }}
        className = 'navBlock1'
        
        
      >
        <ul  >
          <li style = {{}} onClick={() => scroll(about)} className="sliding titleGap">
            {" "}
            About Us
          </li>

          
          <li style = {{}} onClick={() => scroll(contact)} className="sliding titleGap">
            {" "}
            Contact Us
          </li >
          <Link
          to="/Menu"
          target="_blank"
          alt="Home"
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "inherit",
          }}
        ><li style = {{}} className="sliding titleGap">
        {" "}
        Menu
      </li></Link>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
