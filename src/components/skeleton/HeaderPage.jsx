import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { THEMEColor } from "../../assets/THEMES";
import logo from "../../assets/svg/TTM_Black Letter.svg";
import { NavLink } from "react-router-dom";
import "../../styles/MainPage.css";
function HeaderPage() {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: THEMEColor.PRIMARY, boxShadow: 0 }}
        position="statict"
      >
        <Toolbar>
          <Box display={"flex"} width={"100%"}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "30vh" }}>
                <img src={logo} width={"100%"} />
              </Box>
              {/* <Box flex={1} display={"flex"} alignItems={"center"}> */}
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <nav className="nav-button">
                  <NavLink>Home</NavLink>

                  <NavLink>Places</NavLink>

                  <NavLink> About</NavLink>

                  <NavLink>Contact Us</NavLink>
                </nav>
              </Box>
              {/* </Box> */}
            </Box>
            <Box
              width={"20%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button variant="contained">Contact Now</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HeaderPage;
