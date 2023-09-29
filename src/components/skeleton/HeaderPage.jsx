import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { THEMEColor } from "../../assets/THEMES";
import logo from "../../assets/svg/TTM_Black Letter.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/MainPage.css";
import { useTheme } from "@mui/material/styles";
import {
  Close as CloseIcon,
  MenuRounded as MenuRoundedIcon,
  WhatsApp as WhatsAppIcon,
  MailRounded as MailRoundedIcon,
  CallRounded as CallRoundedIcon,
  FacebookOutlined as FacebookOutlinedIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { ROUTEPATH } from "../ROUTEPATH";

function HeaderPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerOpen = (value) => {
    setDrawerOpen(value);
  };
  console.log("object", currentUrl, ROUTEPATH.MAIN + ROUTEPATH.HOME);
  return (
    <>
      <Drawer
        open={drawerOpen}
        anchor=""
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            background: " rgba(0,0,0, 0.85)",

            width: "100%",
            // mx: 3.3,
            my: 4,
            zIndex: "999999",
            position: "relative",
          },
        }}
      >
        {" "}
        <Box textAlign={"right"}>
          <IconButton
            onClick={() => {
              handleDrawerOpen(false);
            }}
            sx={{ color: THEMEColor.PRIMARY }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <nav
            className="nav-button-mobile"
            style={{ flexDirection: "column" }}
          >
            <Link
              className={
                currentUrl === ROUTEPATH.MAIN + ROUTEPATH.HOME
                  ? "nav-active-btn"
                  : "nav-btn"
              }
              to={ROUTEPATH.HOME}
              onClick={() => {
                handleDrawerOpen(false);
              }}
            >
              Home
            </Link>

            <Link
              className={
                currentUrl === ROUTEPATH.MAIN + ROUTEPATH.PLACES
                  ? "nav-active-btn"
                  : "nav-btn"
              }
              to={ROUTEPATH.PLACES}
              onClick={() => {
                handleDrawerOpen(false);
              }}
            >
              Places
            </Link>

            <Link
              className={
                currentUrl === ROUTEPATH.MAIN + ROUTEPATH.ABOUT
                  ? "nav-active-btn"
                  : "nav-btn"
              }
              to={ROUTEPATH.ABOUT}
              onClick={() => {
                handleDrawerOpen(false);
              }}
            >
              {" "}
              About
            </Link>

            <Link
              className={
                currentUrl === ROUTEPATH.MAIN + ROUTEPATH.CONTACT
                  ? "nav-active-btn"
                  : "nav-btn"
              }
              to={ROUTEPATH.CONTACT}
              onClick={() => {
                handleDrawerOpen(false);
              }}
            >
              Contact Us
            </Link>
          </nav>
        </Box>
      </Drawer>
      <Box position={"fixed"} width={"100%"} zIndex={"99999"}>
        {isDeviceDown || isMobile ? (
          <Button
            sx={{
              boxShadow: 0,
              borderRadius: 0,
              backgroundColor: THEMEColor.Secondary,
              // height: "0px",
            }}
            variant={"contained"}
            startIcon={<WhatsAppIcon />}
            className="top-contact-btn"
            fullWidth
          >
            {" "}
            <a href="//api.whatsapp.com/send?phone=918086040400&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND">
              Contact Now
            </a>
          </Button>
        ) : (
          <Box sx={{ backgroundColor: THEMEColor.PRIMARY }}>
            <Container fixed>
              <Box
                height={"100%"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box display="flex" gap="15px">
                  <Box className="email-mob mail">
                    <IconButton sx={{}}>
                      <MailRoundedIcon fontSize="small" />
                    </IconButton>{" "}
                    <a href="mailto:trivandrumtripmaker@gmail.com">
                      trivandrumtripmaker@gmail.com
                    </a>
                  </Box>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    sx={{ height: "auto", borderColor: THEMEColor.buttons }}
                  />
                  <Box className="email-mob phone">
                    {" "}
                    <IconButton sx={{}}>
                      <CallRoundedIcon fontSize="small" />
                    </IconButton>
                    <a href="tel:+918086040400">Ph :+918086040400</a>
                  </Box>
                </Box>
                <Box display={"flex"} gap="10px" className="header-svg-box">
                  <a
                    href="https://www.facebook.com/profile.php?id=100095193374683&mibextid=haYZDX"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookOutlinedIcon className="header-svg fb" />
                  </a>
                  <a
                    href="https://wa.me/message/5QKJSYVWLPELD1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="header-svg wa" />
                  </a>
                  <a
                    href="https://instagram.com/trivandrumtripmaker?igshid=NzZlODBkYWE4Ng=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon className="header-svg in" />
                  </a>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
      <AppBar
        sx={{
          backgroundColor: THEMEColor.PRIMARY,
          my: isDeviceDown || isMobile ? 4 : 4,
        }}
        position="fixed"
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
                sx={{
                  width: isMobile || isDeviceDown ? "15vh" : "30vh",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(ROUTEPATH.HOME);
                }}
              >
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
                    <Link
                      className={
                        currentUrl === ROUTEPATH.MAIN + ROUTEPATH.HOME
                          ? "nav-active-btn"
                          : "nav-btn"
                      }
                      to={ROUTEPATH.HOME}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Home
                    </Link>

                    <Link
                      className={
                        currentUrl === ROUTEPATH.MAIN + ROUTEPATH.PLACES
                          ? "nav-active-btn"
                          : "nav-btn"
                      }
                      to={ROUTEPATH.PLACES}
                    >
                      Places
                    </Link>

                    <Link
                      className={
                        currentUrl === ROUTEPATH.MAIN + ROUTEPATH.ABOUT
                          ? "nav-active-btn"
                          : "nav-btn"
                      }
                      to={ROUTEPATH.ABOUT}
                    >
                      {" "}
                      About
                    </Link>

                    <Link
                      className={
                        currentUrl === ROUTEPATH.MAIN + ROUTEPATH.CONTACT
                          ? "nav-active-btn"
                          : "nav-btn"
                      }
                      to={ROUTEPATH.CONTACT}
                    >
                      Contact Us
                    </Link>
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
    </>
  );
}

export default HeaderPage;
