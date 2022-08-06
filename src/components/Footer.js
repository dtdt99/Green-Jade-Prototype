import React from "react";
import {
  Box,
  Typography,
  Stack,
  ImageList,
  ImageListItem,
} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = ({contact,about,menu,scroll}) => {
  return (
    <Box
      sx={{
        height: "25vh",
        borderTop: "solid #b89400 10px",
        
        
      }}
      className = 'footerMobile'
    >
      <Box
        sx={{ marginLeft: "2%", marginTop: "2%", float: "left", width: "30%" }}
        className = 'footerTitleBox'
      >
        <Typography
          sx={{
            color: "#006b3c",
            fontFamily: "radicalis",
            fontWeight: "bold",
            fontSize: "calc(1.2vh + 1.2vw)",
          }}
          className = 'footerTitleText'
        >
          Green Jade Takeaways
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "calc(0.8vh + 0.8vw)", fontFamily: "Arial" }}
          className = 'footerText'
        >
          1846 Great North Road <br /> Avondale, Auckland <br /> 09 828 8919
        </Typography>

        <CopyrightIcon
          sx={{ position: "relative", top: "13vh", right: "0.5vw", fontSize:'2vw' }}
          className = 'footerCopyRight'
        />{" "}
        <span
          style={{
            position: "relative",
            top: "12vh",
            right: "0.5vw",
            fontSize: "1vw",
            fontFamily: "Arial",
          }}
          className = 'footerCopyRightText'
        >
          2022 Green Jade Takeaways LTD. All Rights reserved
        </span>
      </Box>
      <Box sx={{ marginTop: "4vh", float: "left", width: "35%", display:'flex', justifyContent:'center', }}
      className = 'footerTitleBox'>
          
        <Typography
          sx={{ fontWeight: "bold", fontSize: "calc(0.7vw + 0.7vh)", fontFamily: "Arial" }}
          className = 'footerHourText'
        >
          <span
            style={{ color: "#006b3c", fontSize: "1.6vw" }}
            className = 'footerHourTitle'
          >
            OPENING HOURS
          </span>{" "}

          <br />
          Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 21:30
          <br />
          Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 22:00
          <br />
          Wednesday&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 22:00
          <br />
          Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 22:00
          <br />
          Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 22:00
          <br />
          Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 22:00
          <br />
          Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------
          &nbsp;&nbsp;&nbsp;11:30 - 21:30
        </Typography>
      </Box>

      <Box sx={{ float: "left", width: "20%", marginLeft:'5%' }}
      className = 'footerTitleBox'>
        <Typography>
          <ul
            style={{
              listStyleType: "none",
              fontWeight: "bold",
              fontSize: "calc(1.7vh + 1.7vw)",
              marginLeft: "7%",
              fontFamily: "Arial",
              color: "#006b3c",
            }}
            className = 'footerInfoText'
          >
            <li  className = 'foot' onClick = {() => scroll(about)} style={{ cursor:'pointer' }}>About Us</li>
            <li  className = 'foot' onClick = {() => scroll(menu)} style={{ marginTop: "5%", cursor:'pointer' }}>Menu</li>
            <li  className = 'foot' onClick = {() => scroll(contact)} style={{ marginTop: "5%",cursor:'pointer' }}>Contact Us</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
