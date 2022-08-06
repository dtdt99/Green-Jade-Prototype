import React from "react";
import { Box, Typography } from "@mui/material";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const Contact = () => {
  return (
    <Box sx={{ height: "80vh", display: "flex",  }} className = 'contactBox'>
      <Box
        sx={{
          width: "45vw",
          height: "70%",
          float: "left",
          left: "0vw",
          background: "#006b3c",
          marginLeft: "3vw",
          borderRadius: "30px",
          marginTop:'8vh'
          
          // backgroundImage: `url(${"../images/test15.jpeg"})`,
        }}

        className = 'contactInfoBox'
        
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "gold",
            fontWeight: "bold",
            fontSize: "calc(2vw + 2vh)",
            
            fontFamily: "montserraBold",
          }}
          className = 'contactTitle'
        >
          Contact Us
        </Typography>

        
        <Typography
          sx={{
            marginLeft: "5vw",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "1vh",
            fontSize: "calc(0.9vh + 0.8vw)",
            color: "white",
            fontFamily: "montserratBold",
            fontWeight: "bold",
          }}
          className = 'contactText'
        >
          
          
          <PhoneEnabledIcon
            fontSize="large"
            sx={{ marginRight: "1vw", color: "gold" }}
            className = 'contactIcons'
          />
          <a style = {{cursor:'pointer', color:'inherit', textDecoration:'inherit', borderBottom:'solid white'}} href="tel:+098288919">
           09 828 8919 - Call Us Here</a>
          
        </Typography>
        
        <Typography
          sx={{
            marginLeft: "5vw",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "calc(0.9vh + 0.8vw)",
            marginTop: "5vh",
            color: "white",
            fontFamily: "montserratBold",
            fontWeight: "bold",
          }}
          className = 'contactText'
        >
          <LocationOnIcon
            fontSize="large"
            sx={{ marginRight: "1vw", color: "gold" }}
            className = 'contactIcons'
          />
          1846 Great North Road, Avondale, Auckland
        </Typography>

        <Typography
          sx={{
            marginLeft: "5vw",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "3vh",
            fontSize: "calc(0.9vh + 0.8vw)",
            marginTop: "5vh",
            color: "white",
            fontFamily: "montserratBold",
            fontWeight: "bold",
          }}
          className = 'contactText'
        >
          <QueryBuilderIcon
            fontSize="large"
            sx={{ marginRight: "1vw", color: "gold" }}
            className = 'contactIcons'
          />{" "}
          Sunday - Monday: 11:30am - 9:30pm <br />
          Tuesday - Saturday: 11:30am - 10pm
        </Typography>
        <Typography
          sx={{
            marginLeft: "5vw",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "calc(0.9vh + 0.8vw)",
            marginTop: "5vh",
            color: "white",
            fontFamily: "montserratBold",
            fontWeight: "bold",
            width:'35vw'
          }}
          className = 'contactText'
        >
          If you have any questions, feel free to call us during opening hours
        </Typography>
      </Box>

      <Box
        sx={{
          width: "50vw",
          height: "100%",
          float: "left",
          marginLeft: "5vw",
        }}

        className = 'contactMapBox'
      
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8500180073183!2d174.69436841744383!3d-36.8939361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d46cec19d623d%3A0x7db22423b6a2ee0d!2sGreen%20Jade%20Takeaways!5e0!3m2!1sen!2snz!4v1656561758733!5m2!1sen!2snz"
          width="90%"
          height="90%"
          style={{
            border: 0,
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
            border: "5px solid #006b3c",
            borderRadius: "20px",
          }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
