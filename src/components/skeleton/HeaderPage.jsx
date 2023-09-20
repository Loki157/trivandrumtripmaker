import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { THEMEColor } from "../../assets/THEMES";
import logo from "../../assets/svg/TTM_Black Letter.svg";
function HeaderPage() {
  return (
    <>
      <AppBar sx={{ backgroundColor: THEMEColor.PRIMARY, boxShadow: 0 }}>
        <Toolbar>
          <Box sx={{ width: "30vh" }}>
            <img src={logo} width={"100%"} />
          </Box>
          <Box>
            <ul>
              <li>Home</li>
              <li>Places</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderPage;
