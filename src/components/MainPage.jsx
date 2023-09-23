import React from "react";

import { Box, Button, Container, useMediaQuery } from "@mui/material";
import "../styles/MainPage.css";
import { Outlet } from "react-router-dom";
import HeaderPage from "./skeleton/HeaderPage";
import FooterPage from "./skeleton/FooterPage";
import { useTheme } from "@mui/material/styles";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { THEMEColor } from "../assets/THEMES";
function MainPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
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
          {/* <footer >
            <FooterPage />
          </footer> */}
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
}

export default MainPage;
