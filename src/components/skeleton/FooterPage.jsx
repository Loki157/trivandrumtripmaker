import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/svg/TTM_Black Letter.svg";
import { NavLink } from "react-router-dom";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
function FooterPage() {
  return (
    <>
      <Box height={"100%"} maXWidth={"100%"} padding={"10px"}>
        <Toolbar>
          <Box display={"flex"} width={"100%"}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                width={"40%"}
                gap={"10px"}
              >
                <Box sx={{ width: "30vh" }}>
                  <img src={logo} width={"100%"} />
                </Box>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Typography
                    sx={{
                      width: "70%",
                      textAlign: "left",
                      fontFamily: "Poppins-Light",
                      fontSize: "12px",
                    }}
                    variant="body1"
                  >
                    Trivandrum trip makers is a car booking service provider
                    that offers safe and comfortable trips in trivandrum. we
                    committed to providing the best travel experience to our
                    customers.
                  </Typography>
                </div>
                <Box>
                  <IconButton className="icon-btn">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton className="icon-btn">
                    <FacebookIcon />
                  </IconButton>
                  {/* <IconButton></IconButton>
<IconButton></IconButton>
<IconButton></IconButton> */}
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <nav className="nav-button" style={{ flexDirection: "column" }}>
                  <NavLink>Home</NavLink>

                  <NavLink>Places</NavLink>

                  <NavLink> About</NavLink>

                  <NavLink>Contact Us</NavLink>
                </nav>
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
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}

export default FooterPage;
