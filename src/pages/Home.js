import React, {useRef} from "react";
import { Box  } from "@mui/material";
import IntroBanner from "../components/IntroBanner";
import "../App.css";
import OperatingBanner from "../components/OperatingBanner";
import AboutBanner from "../components/AboutBanner";
import MenuBanner from "../components/MenuBanner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import MobileNavbar from "../components/MobileNavbar";


const Home = () => {
  const about = useRef(null);
  const menu = useRef(null);
  const contact = useRef(null);

  const top = useRef(null);

 

  const scrollToSection  = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 230,
      behavior:"smooth",
  
    })
  }


  

  return (
    
    <Box sx = {{backgroundImage: "url(../images/floralLargerW.jpeg)",
    backgroundSize: "40%", width:"100vw", overflowX:"hidden", }} className = 'mobileBackground'>
      <div ref = {top}>
      <Navbar contact = {contact} about = {about} menu = {menu} scroll = {scrollToSection} />
      </div>
      <div>
      <IntroBanner />
      </div>
      <div>
      <OperatingBanner />
      </div>
      <div ref = {about}>
      <AboutBanner/>
      </div>
      <div ref = {menu}>
      <MenuBanner />
      </div>
    
      <Gallery/>
      <div ref = {contact}>
        <Contact/>
      </div>
      <div>
      <Footer contact = {contact} about = {about} menu = {menu} scroll = {scrollToSection}/>
      </div>
      <div>
      <MobileNavbar contact = {contact} scroll = {scrollToSection} top = {top}/>
      </div>
    </Box>
  );
};

export default Home;
