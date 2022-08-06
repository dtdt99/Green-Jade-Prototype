import React, { useRef,} from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";


import Button from "@mui/material/Button";

import blackBean from "../database/blackBean.json";
import burgers from "../database/burgers.json";
import chefSpecial from "../database/chefSpecial.json";
import chowMein from "../database/chowMein.json";
import curriedDishes from "../database/curriedDishes.json";
import deepFried from "../database/deepFried.json";
import eggFooYoung from "../database/eggFooYoung.json";
import extras from "../database/extras.json";
import familyPacks from "../database/familyPacks.json";
import fishAndChips from "../database/fishAndChipSpecials";
import friedNoodles from "../database/friedNoodles.json";
import friedRice from "../database/friedRice.json";
import soups from "../database/soups.json";
import specials from "../database/specials.json";
import sweetAndSour from "../database/sweetAndSour.json";
import toastedSandwiches from "../database/toastedSandwiches.json";
import MenuCategory from "../components/MenuCategory";
// import { Link  } from "react-router-dom";
import MenuNavbar from "../components/MenuNavbar";
const Menu = () => {

  const chinese = useRef(null);
  const fac = useRef(null);
  const top = useRef(null);
  const friedRiceRef = useRef(null);
  const chowMeinRef = useRef(null);
  const eggFooYoungRef = useRef(null);
  const sweetAndSourRef = useRef(null);
  const friedNoodleRef = useRef(null);
  const curriedDishesRef = useRef(null);
  const blackBeanRef = useRef(null);
  const specialsRef = useRef(null);
  const soupsRef = useRef(null);
  const chefSpecialRef = useRef(null);
  const  familyPacksRef = useRef(null);
  const extrasRef = useRef(null);
  const burgersRef = useRef(null);
  const deepFriedRef = useRef(null);
  const toastedSandwichesRef = useRef(null);
  const fishAndChipsRef = useRef(null);

  const categories = [
    {"name":"Fish & Chip Combos", "ref": fishAndChipsRef},
    {"name":"Chinese Family Packs", "ref": familyPacksRef},
    {"name":"Deep Fried", "ref": deepFriedRef},
    {"name":"Burgers", "ref": burgersRef},
    {"name":"Toasted Sandwiches", "ref": toastedSandwichesRef},
    {"name":"Fried Rice", "ref": friedRiceRef},
    {"name":"Chow Mein", "ref": chowMeinRef},
    {"name":"Sweet & Sour", "ref": sweetAndSourRef},
    {"name":"Egg Foo Young", "ref": eggFooYoungRef},
    {"name":"Fried Noodles", "ref": friedNoodleRef},
    {"name":"Chef Specials", "ref": chefSpecialRef},
    {"name":"Black Bean", "ref": blackBeanRef},
    {"name":"Curried Dishes", "ref": curriedDishesRef},
    {"name":"Specials", "ref": specialsRef},
    {"name":"Soups", "ref": soupsRef},
    {"name":"Extras", "ref": extrasRef},
   


  ]
  
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 230,
      behavior: "smooth",
    });
  };



  return (
    <Box ref = {top}
      sx={{
        width: "98vw",
        height: "100%",
        border: "0.2vw solid #81B622",
        borderImage: "url(../images/test12.jpeg)",
        borderWidth: "1vh",
        borderImageRepeat: "round",
        borderImageSlice: "10%",
        backgroundImage: "url(../images/floralLargerW.jpeg)",
        backgroundSize: "40%",
        overflowY: "hidden",
        margin:"auto"
      }}
      className = 'mobileMenu'
    >

      <Box>
        <MenuNavbar categories = {categories} top = {top}/>
      </Box>

      

      
      <Button
        onClick={() => scrollToSection(top)}
        variant="contained"
        sx={{
          backgroundColor: "#006b3c",
          color: "white",
          fontFamily: "Arial",
          marginRight: "3vw",
          "&.MuiButtonBase-root:hover": { bgcolor: "green" },
          minWidth: "12vw",
          minHeight:'3vw',
          fontSize: "1.3vw",
          borderRadius: "15px",
          position:'fixed',
          zIndex: '999',
          left:'80%',
          top:'90%'
        }}

        className = 'menuButton hidden'
      >
        Back To Top
      </Button>


      <Box
        sx={{
          height: "auto",
          borderImage: "url(../images/test12.jpeg)",
          borderImageRepeat: "round",
          borderImageSlice: "10%",
          borderBottom: "0.2vw solid",
          borderWidth: "1vh",
          alignItems: "center",
          display: "inline-flex",
          width:"100%",
        }}
        className = 'mobileMenuBottom'
      >
        <Box
          sx={{
            float: "left",
            width: "27.5%",
            textAlign: "center",
          }}
          className = 'hidden'
        >
          <Typography
            sx={{
              fontSize: "calc(1.5vh + 1.5vw)",
              fontFamily: "montserratBold",
              fontWeight: "bold",
              
            }}

            className = 'menuTitleInfo'
          >
            <a style = {{cursor:'pointer', color:'inherit', textDecoration:'inherit',}} href="tel:+098288919">Phone Orders
            <br /> 09 828 8919 <br/><span style = {{color:'green',}}> Call Now</span></a>
            
          </Typography>
        </Box>

        <Box
          sx={{
            float: "left",
            width: "45%",
            textAlign: "center",
            margin:'auto',
            height:'50vh'
            
           

          }}
          className = 'menuTitle'
        >
          <Typography
            sx={{
              color: "#006b3c",
              fontFamily: "radicalis",
              fontWeight: "bold",
              fontSize: "calc(2.5vh + 2.5vw)",
              borderBottom: "0.5vh solid #b89400",
            }}
            className = 'menuTitle1'
          >
            {/* <Link
          to="/"
          target="_blank"
          alt="Home"
          style={{
            cursor: "pointer",
            color: "inherit",
            textDecoration: "inherit",
          }}
        >Green Jade Takeaways{" "}</Link> */}

<a style = {{cursor:'pointer', color:'inherit', textDecoration:'inherit'}} href="/">Green Jade Takeaways</a> 

            
            
          </Typography>
          <Typography
            sx={{
              color: "green",
              fontWeight: "bold",
              fontFamily: "Courier New",
              fontSize: "calc(1vh + 1vw)",
            }}
            className = 'menuTitle2'
          >
            Fish & Chips and Chinese Takeaways{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "calc(1vh + 1vw)",
              fontFamily: "Courier New",
              fontWeight: "bold",
              marginTop: "1%",
            }}
            className = 'menuTitle3'
          >
            1846 Great North Road Avondale
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "calc(3vh + 3vw)",
              fontFamily: "montserratBold",
              color: "#b89400",
              marginTop: "vh",
            }}
            className = 'menuTitle'
          >
            Menu{" "}
          </Typography>
          <Box>
            <Button
              onClick={() => scrollToSection(chinese)}
              variant="contained"
              sx={{
                backgroundColor: "#006b3c",
                color: "white",
                fontFamily: "montserratBold",
                marginRight: "3vw",
                "&.MuiButtonBase-root:hover": { bgcolor: "green" },
                minWidth: "12vw",
                fontSize: "calc(1vw + 1vh)",
                borderRadius: "15px",
              }}
              className = 'menuButton2'
            >
              Chinese Dishes
            </Button>
            <Button
              onClick={() => scrollToSection(fac)}
              variant="contained"
              sx={{
                backgroundColor: "#006b3c",
                color: "white",
                fontFamily: "montserratBold",
                "&.MuiButtonBase-root:hover": { bgcolor: "green" },
                minWidth: "12vw",
                fontSize: "calc(1vw + 1vh)",
                borderRadius: "15px",
              }}
              className = 'menuButton2'
            >
              Fish and Chips
            </Button>
          </Box>
          
        </Box>

        <Box
          sx={{
            float: "left",
            width: "27.5%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "calc(0.8vw + 0.8vh)",
              fontFamily: "montserratBold",
              fontWeight: "bold",
            }}
            className = 'hidden'
          >
            Sunday-Monday: 11:30am - 9:30pm
            <br />
            Tuesday-Saturday: 11:30am - 10:00pm
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box ref={chinese}>
          <Typography
            sx={{
              backgroundColor: "#006b3c",
              fontFamily: "montserratBold",
              fontWeight: "bold",
              fontSize: "3vw",
              textAlign: "center",
              marginTop: "5vh",
              color: "white",
              width: "auto",
              marginBottom: "2vh",
            }}
            className = 'menuHeaders'
          >
            Chinese Dishes
          </Typography>
        </Box>




        <Box
          sx={{
            display: "",
            width: "33%",
            float: "left",
            height: "calc(120vh + 50vw)",
            borderRight: "0.3vw dashed #b89400",
          }}
          className = 'menuCol'
        
        >
          <Box sx={{ marginTop: "3vh" }} ref = {friedRiceRef}>
            <MenuCategory data={friedRice} name={"Fried Rice"} />
          </Box>

          <Box sx={{ marginTop: "4vh" }} className = 'mobileMenuGap' ref = {friedNoodleRef}>
            <MenuCategory data={friedNoodles} name={"Fried Noodles"} />
          </Box>

          <Box sx={{ marginTop: "4vh" }} className = 'mobileMenuGap' ref = {soupsRef}>
            <MenuCategory data={soups} name={"Soups"}  />
          </Box>

          <Box sx={{ marginTop: "10vh" }} className = 'mobileMenuGap' ref = {specialsRef}>
            <MenuCategory data={specials} name={"Specials"} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "",
            width: "33%",
            float: "left",
            height: "calc(120vh + 50vw)",
            borderRight: "0.3vw dashed #b89400",
          }}
          className = 'menuCol'
        >
          <Box sx={{ marginTop: "3vh" }} ref = {chowMeinRef}>
            <MenuCategory data={chowMein} name={"Chow Mein / Chop Suey"} />
          </Box>

          <Box sx={{ marginTop: "4vh" }} className = 'mobileMenuGap' ref = {sweetAndSourRef}>
            <MenuCategory data={sweetAndSour} name={"Sweet & Sour"} />
          </Box>

          <Box sx={{ marginTop: "5vh" }} className = 'mobileMenuGap' ref = {blackBeanRef}>
            <MenuCategory data={blackBean} name={"Black Bean Dishes"} />
          </Box>
          <Box sx={{ marginTop: "5vh" }} className = 'mobileMenuGap' ref = {extrasRef}>
            <MenuCategory data={extras} name={"Extras"} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "block",
            width: "33%",
            float: "left",
            height: "calc(120vh + 50vw)",
          }}
          className = 'menuCol'
          
        >
          <Box sx={{ marginTop: "3vh" }} ref = {eggFooYoungRef}>
            <MenuCategory data={eggFooYoung} name={"Egg Foo Young (Omlette)"}  />
          </Box>
          <Box sx={{ marginTop: "5vh" }} className = 'mobileMenuGap' ref = {chefSpecialRef}>
            <MenuCategory data={chefSpecial} name={"Chef Specials"} />
          </Box>
          <Box sx={{ marginTop: "5vh" }} className = 'mobileMenuGap' ref = {curriedDishesRef}>
            <MenuCategory data={curriedDishes} name={"Curried Dishes"} />
          </Box>
        </Box>
      </Box>

      <Box sx = {{}} className = 'chineseGap' ref = {familyPacksRef}>
        <MenuCategory data={familyPacks} name={"Chinese Family Packs"} />
      </Box>

      <Box ref={fac}>
        <Typography
          sx={{
            backgroundColor: "#006b3c",
            fontFamily: "montserratBold",
            fontWeight: "bold",
            fontSize: "3vw",
            textAlign: "center",
            marginTop: "8vh",
            color: "white",
            width: "auto",
            marginBottom: "2vh",
          }}
          className = 'menuHeaders'
        >
          Fish And Chips
        </Typography>
      </Box>

      <Box //Left
        sx={{
          display: "",
          width: "33%",
          float: "left",
          height: "calc(50vh + 20vw)",
          borderRight: "0.3vw dashed #b89400",
        }}
        className = 'menuCol'
      >
        <Box sx={{ marginTop: "5vh" }} className = 'mobileMenuGap' ref = {burgersRef}>
          <MenuCategory data={burgers} name={"Burgers"} />
        </Box>
      </Box>

      <Box // middle
        sx={{
          display: "",
          width: "33%",
          float: "left",
          height: "calc(50vh + 20vw)",
          borderRight: "0.3vw dashed #b89400",
        }}
        className = 'menuCol'
      >
        <Box sx={{ marginTop: "5vh" }}className = 'mobileMenuGap' ref = {deepFriedRef}>
          <MenuCategory data={deepFried} name={"Deep Fried"} />
        </Box>
      </Box>

      <Box // right
        sx={{
          display: "",
          width: "33%",
          float: "left",
          height: "calc(50vh + 20vw)",
          borderRight: "0.3vw dashed #b89400",
        }}
        className = 'menuCol'
      >
        <Box sx={{ marginTop: "5vh" }}className = 'mobileMenuGap' ref = {toastedSandwichesRef}>
          <MenuCategory data={toastedSandwiches} name={"Toasted Sandwiches"} />
        </Box>
      </Box>

      <Box className = 'fac' ref = {fishAndChipsRef}>
        <MenuCategory data={fishAndChips} name={"Fish And Chip Combos"} />
      </Box>
    </Box>
  );
};

export default Menu;
