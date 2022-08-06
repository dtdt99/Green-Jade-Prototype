import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const MenuBanner = () => {
  return (
    <Box sx = {{width:'100vw', height: '70vh', display:'inline-block', }} className = 'menuHeight' >
       <Box
        sx={{ float: "right", width: "40vw", marginTop: "calc(0vh + 0vw)", height:'auto' }} className = 'homeMenuBlock'>

        
      
        <Typography
          sx={{
            marginLeft: "3vw",
            marginTop:'0vh',
            fontSize: "calc(0.85vw + 0.9vh)",
            width: "65%",
            fontWeight: "bold",
            color: "#006b3c",
            fontFamily: "montserratBold",
         
          }}
          className = 'homeMenuText'
          
        >
          There is no such thing as{" "}
          <span style={{ color: "#b89400" }}> too big</span> of an order, or{" "}
          <span style={{ color: "#b89400" }}> too small</span> of an order.
          <br /> Our menu features a{" "}
          <span style={{ color: "#b89400" }}> large variety of choices </span>to
          ensure that there is something for everyone.
          <br /> Ranging from{" "}
          <span style={{ color: "#b89400" }}>Chinese dishes</span> to
          <span style={{ color: "#b89400" }}> Fish and Chips</span>, you can
          enjoy our food the same regardless of whether you're here for a quick
          lunch or catering towards for a large gathering. View our menu for{" "}
          <span style={{ color: "#b89400" }}> full details.</span>
        </Typography>

        <Link
          to="/Menu"
          target="_blank"
          alt="Home"
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "inherit",
            marginLeft: "9vw",
            position: "relative",
            top: "5vh",
          }}
          className = 'homeMenuButton'
          
        >
          <Button
            variant="contained"
            
            startIcon={<MenuBookIcon />}
            sx={{
              maxWidth: "60%",
              maxHeight:'200px',
              minWidth: "30%",
              minHeight: "80px",
              backgroundColor: "#b89400",
            }}

            className = 'homeMenuButton'
          
          >
            {" "}
            MENU
          </Button>
        </Link>
      </Box>

      <Box sx={{ float: "left", width: "60vw", height:'auto'}} className = 'homeMenuBlock1' >


        <img
          style={{
            paddingLeft: "6vw",
            objectFit: "cover",
            width: "90%",
            transform: "skew(0deg,-3deg)",
            position: "relative",
            top: "-12vh",
            height:'calc(55vh + 10vw)'
            
          }}
          src="../images/test8.jpeg"
          alt="restaurant"
          loading="lazy"
          className = 'homeMenuPic'
          
        />
      </Box>

      

    

  
    </Box>
  );
};

export default MenuBanner;
