import React from "react";

import { Box, Container } from "@mui/material";
import "../styles/MainPage.css";
import { Outlet } from "react-router-dom";
import HeaderPage from "./skeleton/HeaderPage";
import FooterPage from "./skeleton/FooterPage";
function MainPage() {
  return (
    <>
      <Box className="main">
        <Box className="main-head">
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
