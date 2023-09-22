import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { THEMEColor } from "../../assets/THEMES";
import logo from "../../assets/svg/TTM_Black Letter.svg";
import { NavLink } from "react-router-dom";
import "../../styles/MainPage.css";
import { useTheme } from "@mui/material/styles";
import {
  Close as CloseIcon,
  MenuRounded as MenuRoundedIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

function HeaderPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerOpen = (value) => {
    setDrawerOpen(value);
  };
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
              {isMobile || isDeviceDown ? null : (
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
              )}
              {/* </Box> */}
            </Box>
            <Box
              width={"20%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {isMobile || isDeviceDown ? (
                <>
                  <IconButton
                    onClick={() => {
                      handleDrawerOpen(true);
                    }}
                  >
                    <MenuRoundedIcon />
                  </IconButton>
                </>
              ) : (
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
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        anchor=""
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            // backgroundColor: "red",

            width: "90%",
            mx: 3.3,
          },
        }}
      >
        {" "}
        <Box textAlign={"right"}>
          <IconButton
            onClick={() => {
              handleDrawerOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            padding: "20px",
          }}
        >
          <nav
            className="nav-button-mobile"
            style={{ flexDirection: "column" }}
          >
            <NavLink>Home</NavLink>

            <NavLink>Places</NavLink>

            <NavLink> About</NavLink>

            <NavLink>Contact Us</NavLink>
          </nav>
        </Box>
      </Drawer>
    </>
  );
}

export default HeaderPage;