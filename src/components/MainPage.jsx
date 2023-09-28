import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import "../styles/MainPage.css";
import { Outlet } from "react-router-dom";
import HeaderPage from "./skeleton/HeaderPage";
import FooterPage from "./skeleton/FooterPage";
import { useTheme } from "@mui/material/styles";
import {
  WhatsApp as WhatsAppIcon,
  ArrowUpwardRounded as ArrowUpwardRoundedIcon,
} from "@mui/icons-material";
import { THEMEColor } from "../assets/THEMES";
function MainPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
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
