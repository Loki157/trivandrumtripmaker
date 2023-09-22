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
      <Box className="main">
        <Box className="main-head">
          {isDeviceDown || isMobile ? (
            <Button
              sx={{
                boxShadow: 0,
                borderRadius: 0,
                backgroundColor: THEMEColor.Secondary,
              }}
              variant={"contained"}
              startIcon={<WhatsAppIcon />}
              className="top-contact-btn"
            >
              {" "}
              <a href="//api.whatsapp.com/send?phone=918086040400&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND">
                Contact Now
              </a>
            </Button>
          ) : null}
          <header>
            <HeaderPage />
          </header>
          <Box className="container">
            <Container fixed className="container-main" sx={{ height: "100%" }}>
              <Outlet />
            </Container>
          </Box>

          <footer>
            <FooterPage />
          </footer>
        </Box>
      </Box>
    </>
  );
}

export default MainPage;
