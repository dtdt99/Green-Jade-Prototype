import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

const MenuNavbar = ({ categories, top }) => {
  const scrollToSection = (elementRef) => {
    console.log(elementRef);

    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: "auto",
    // });
    setAnchorEl(null);
    setTimeout(() => {elementRef.current.scrollIntoView(true);}, 150)
    
    
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const OpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ visibility: "hidden" }} className="menuNavbar">
      <Box sx={{ display: "inline-block" }}>
        <Button
          sx={{
            width: "63vw",
            fontSize: "calc(1.5vh + 1.5vw)",
            position: "fixed",
            bottom: "0px",
            fontWeight: "bold",
            fontFamily: "Arial",
            backgroundColor: "green",
            marginLeft: "-1vw",
            zIndex: "999",
            height: "calc(5vh + 3vw)",
            cursor:'pointer',
          }}
          variant="contained"
          onClick={OpenMenu}
        >
          View Categories
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Box
            sx={{
              width: "60vw",

              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
            <MenuItem sx = {{fontWeight:'bold', fontSize:'calc(2h + 2vw)', backgroundColor:'#b89400', fontFamily:'Arial', cursor:'pointer'}} onClick={() => scrollToSection(top)} >Back To Top </MenuItem>
            {categories.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => scrollToSection(item.ref)}
                className="menuItemText"
              >
                {item.name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Box>

      <Box sx={{ display: "inline-block" }}>
        <a
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "inherit",
          }}
          href="tel:+098288919"
        >
          <Button
            sx={{
              width: "40vw",
              fontSize: "calc(1.5vh + 1.5vw)",
              position: "fixed",
              bottom: "0px",
              fontWeight: "bold",
              fontFamily: "Arial",
              backgroundColor: "#b89400",
              right: "0",
              zIndex: "999",
              height: "calc(5vh + 3vw)",
            }}
            variant="contained"
          >
            Call Now
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default MenuNavbar;
