import React from "react";
import "../App.css";

import { Box, Typography } from "@mui/material";

const MenuCategory = ({ data, name }) => {
  return data[0].description ? (
    <Box>
      <Box
        sx={{
          display: "inline-block",
          width: "100%",
          height: "auto",
          marginTop: "50vh",
        }}
        className="menuMargin"
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "calc(2.5vh + 2.5vw)",
            fontFamily: "montserratBold",
            color: "#006b3c",
          }}
          className="menuSpecialTitle"
        >
          {name}
        </Typography>

        <Box
          sx={{
            margin: "auto",
            borderBottom: "0.5vh solid #b89400",
            width: "60vw",
            marginBottom: "2vh",
          }}
          className="mobileUnderlineHeader"
        ></Box>

        {data.map((item, index) => {
          return (
            <Box
              sx={{
                display: "inline-flex",
                width: "33%",
                flexDirection: "column",
                textAlign: "center",
                marginTop: "3vh",
                borderRight: "0.3vw dashed #b89400",
              }}
              className="menuWidth"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "calc(1.5vh + 1.5vw)",
                  fontFamily: "montserratBold",
                  color: "#006b3c",
                }}
                className="specialTitle"
              >
                {item.name}
              </Typography>
              <Box
                sx={{
                  margin: "auto",
                  borderBottom: "0.5vh solid #b89400",
                  width: "15vw",
                }}
                className="mobileUnderline"
              ></Box>
              <Typography
                sx={{
                  marginTop: "2vh",
                  fontWeight: "bold",
                  fontFamily: "Courier New",
                  color: "#006b3c",
                  fontSize: "calc(0.9vh + 0.9vw)",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="specialDescription"
              >
                {" "}
                {item.description}
              </Typography>
              <Typography
                sx={{
                  marginTop: "2vh",
                  fontWeight: "bold",
                  fontFamily: "Courier New",
                  height: "auto",
                  fontSize: "calc(1vh + 1vw)",
                  color: "black",
                }}
                className="specialPrice"
              >
                {item.price}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  ) : (
    <Box sx={{ width: "30vw", display: "inline-block" }} className="menuBlock">
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "calc(1.3vh + 1.3vw)",
          fontFamily: "montserratBold",
          color: "#006b3c",
        }}
        className="categoryTitle"
      >
        {name}
      </Typography>
      <Box
        sx={{
          margin: "auto",
          borderBottom: "0.5vh solid #b89400",
          width: "6vw",
        }}
        className="mobileUnderline"
      ></Box>

      <Box
        sx={{
          marginTop: "3vh",
          display: "block",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box sx={{ marginTop: "1vh" }} key={index}>
              <Typography
                sx={{
                  display: "inline-table",
                  textAlign: "left",
                  fontSize: "calc(0.9vw + 0.8vh)",
                  marginLeft: "2vw",
                  fontWeight: "bold",
                  fontFamily: "Courier New",
                  color: "#006b3c",
                }}
                className="categoryItem"
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  display: "inline-table",
                  float: "right",
                  fontSize: "calc(0.8vw + 0.8vh)",
                  marginRight: "vw",
                  fontWeight: "bold",
                  fontFamily: "Courier New",
                }}
                className="categoryPrice"
              >
                {item.price}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MenuCategory;
