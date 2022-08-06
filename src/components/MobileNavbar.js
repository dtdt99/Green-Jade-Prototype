import React from "react";
import { Box } from "@mui/material";
import { Link  } from "react-router-dom";
import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CallIcon from '@mui/icons-material/Call';



const MobileNavbar = ( { top, contact}) => {

  const scroll = (elementRef) => {
  
    // window.scrollTo({
    //   top: elementRef.current.visibility,
    //   behavior: "auto",
    // });

    elementRef.current.scrollIntoView({behavior:'smooth'});
  };

  
  return (
    <Box sx = {{visibility:'hidden'}} className = 'mobileNavbar'>

      <Box sx = {{display:'inline-block'}} className = 'mobileNavbarBlock'>
      
        <Box sx = {{display:'block',   }} onClick = {() => scroll(top)} >
        
          <HomeIcon sx = {{width:'100%',fontSize:'120%'}}className = 'mobileNavIcon'/>
          <Typography sx = {{width:'100%',fontSize:"130%", fontWeight:'bold', fontFamily:'montserratLight'}}className = 'mobileNavText'>Home</Typography>
          
        </Box>
       
        </Box>


        <Box sx = {{display:'inline-block',}} className = 'mobileNavbarBlock' >
        <Box sx = {{display:"block", }}  >
        <Link
          to="/Menu"
          target="_blank"
          alt="Home"
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <MenuIcon sx = {{width:'100%', fontSize:'120%'}}className = 'mobileNavIcon'/>
          <Typography sx = {{width:'100%',fontSize:"130%", fontWeight:'bold', fontFamily:'montserratLight'}} className = 'mobileNavText'>Menu</Typography>
          </Link>
        </Box>
        </Box>


        <Box sx = {{display:'inline-block'}} className = 'mobileNavbarBlock' >
        <Box sx = {{display:'block'}}  onClick = {() => scroll(contact)}>
          <ContactPageIcon sx = {{width:'100%',fontSize:'120%'}}className = 'mobileNavIcon'/>
          <Typography sx = {{width:'100%',fontSize:"130%", fontWeight:'bold', fontFamily:'montserratLight'}}className = 'mobileNavText'>Contact</Typography>
        </Box>
        </Box>

        <Box sx = {{display:'inline-block'}} className = 'mobileNavbarBlock'>
        <Box sx = {{display:'block',}} >
        <a style = {{cursor:'pointer', color:'inherit', textDecoration:'inherit'}} href="tel:+098288919"> 
          <CallIcon sx = {{width:'100%',fontSize:'120%'}}className = 'mobileNavIcon'/>
          <Typography sx = {{width:'100%',fontSize:" 130%", fontWeight:'bold', fontFamily:'montserratLight'}}className = 'mobileNavText'>Call</Typography>
          </a>
        </Box>
        </Box>


    </Box>
  )
}

export default MobileNavbar