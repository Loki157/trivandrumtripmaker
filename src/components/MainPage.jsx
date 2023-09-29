import { useEffect, useState } from "react";

import { Box, IconButton } from "@mui/material";
import "../styles/MainPage.css";
import { Outlet } from "react-router-dom";
import HeaderPage from "./skeleton/HeaderPage";
import FooterPage from "./skeleton/FooterPage";

import { ArrowUpwardRounded as ArrowUpwardRoundedIcon } from "@mui/icons-material";

function MainPage() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <IconButton className="scroll-to-top-button" onClick={scrollToTop}>
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )}

      {/* <Box className="main"> */}
      <Box className="main-head" id="main-head-scroll">
        {/* <Box position={"relative"} width={"100%"}> */}
        <Box>
          <header style={{ minHeight: "10vh" }}>
            <HeaderPage />
          </header>
          {/* </Box> */}
          <Box className="container">
            <Outlet />
          </Box>
          <footer>
            <FooterPage />
          </footer>
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
}

export default MainPage;
