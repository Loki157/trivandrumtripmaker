import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "../../assets/svg/TTM_Black Letter.svg";
import { NavLink } from "react-router-dom";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { THEMEColor } from "../../assets/THEMES";
import { WhatsApp as WhatsAppIcon } from "@mui/icons-material";
function FooterPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        height={"100%"}
        maXWidth={"100%"}
        padding={"10px"}
        overflow={"hidden"}
        boxShadow={"3px 3px 10px 3px #dddddd"}
        position={"sticky"}
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
                      fontSize: isMobile
                        ? "5px"
                        : isDeviceDown
                        ? "8px"
                        : "15px",
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
                <nav
                  className="nav-button"
                  style={{ flexDirection: "column", gap: "10px" }}
                >
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
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}

export default FooterPage;
