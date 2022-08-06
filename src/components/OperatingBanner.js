import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { borderTop } from "@mui/system";
const OperatingBanner = () => {
  return (
    <Box sx = {{width:'100vw', height:'70vh', display:'inline-block'}} className ='operatingHeight'>

<Box
        sx={{
          float: "right",
          width: "47vw",
          display:'inline-block'
        }}
        className = 'operatingWidth'
      >



        <Box
        
          sx={{
            width: "35vw",
            display: "inline-block",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "5vw",
            marginTop: "-2vh",
            borderBottom: "solid #b89400 10px",
            borderTop: "solid #b89400 10px",
          
          }}
          className = 'operatingBanner'
          
        >
          
          <Typography
            sx={{
              fontSize: "calc(0.8vw + 1.6vh)",
              fontWeight: "bold",
              fontFamily: "montserratBold",
              color: "#006b3c",
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
            
          
            }}
            className = 'operatingText'
          >
            <p>
              <span className = 'operatingText1' style={{ marginLeft: "0%" }}>Serving Tasty</span> <br />{" "}
              Fish And Chips & Chinese Takeaways <br />{" "}
              <span className = 'operatingText1' style={{ marginLeft: "0%"  }}>Since The 1970's</span>
            </p>
            
          </Typography>
        
        </Box>

        <Box sx={{marginTop:'-8vh', float: "left", width: "20vw" }}
         className = 'operatingBlock'> 
          
          <Box>
            <LocationOnIcon
              sx={{
                color: "#b89400",
                marginLeft: "10vw",
                marginTop: "12vh",
                fontSize: "calc(2vh + 2vw)",
                
              }}
              className = 'operatingIcons'
            />
            <Typography
              sx={{
                marginLeft: "7vw",
                marginTop: "1vh",
                fontWeight: "bold",
                fontSize:  "calc(0.7vw + 0.7vh)",
                color: "#006b3c",
                fontFamily: "montserratBold",
              }}
              className = 'operatingIconText'
            >
              1846 Great North Road <br /> Avondale, Auckland <br /> 09 828 8919
            </Typography>
          </Box>
        </Box>

        <Box sx={{marginTop:'-8vh', float: "left", width: "25vw" }}
        className = 'operatingBlock'>
          <AccessTimeIcon
            sx={{
              color: "#b89400",
              marginLeft: "8vw",
              marginTop: "12vh",
              fontSize: "calc(2vh + 2vw)",
            }}
            className = 'operatingIcons'
          />
          <Typography
            sx={{
              marginLeft: "4vw",
              marginTop: "1vh",
              fontWeight: "bold",
              fontSize: "calc(0.7vw + 0.7vh)",
              color: "#006b3c",
              fontFamily: "montserratBold",
            }}
            className = 'operatingIconText'
          >
            Sun - Mon 11:30AM - 9:30PM <br /> Tue - Sat 11:30AM - 10:00PM
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          float: "left",
          width: "53vw",
          display:'inline-block',
          overflow:'visible'
        }}
        className = 'operatingWidth2'
      >
        <img
          style={{
            paddingLeft: '6vw',
            objectFit: "cover",
            width: "95%",
            transform: "skew(0deg,-4deg)",
            position:'relative',
            top:'calc(0vh - 4vh - 4vw)',
            height:'calc(50vh + 10vw)'
            
          }}
          src="../images/test6.jpeg"
          alt="restaurant"
          loading="lazy"
          className = 'operatingPic'
        />
      </Box>

     
    </Box>
  );
};

export default OperatingBanner;
