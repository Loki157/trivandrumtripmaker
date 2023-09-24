import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import React from "react";
// Imagesss////
import landImage from "../../../assets/images/wallpaperflare.com_wallpaper (4).jpg";
import ttmCar1 from "../../../assets/images/ttmcar1.jpeg";
import ttmCard1 from "../../../assets/images/ttmcard1.png";
import kathak from "../../../assets/images/kerala_kathak.jpg";
import padhmanabha from "../../../assets/images/places/Padmanabhaswamy_temple.jpg";
import airport from "../../../assets/images/places/airport.jpg";
// -------//
import { THEMEColor } from "../../../assets/THEMES";
import { useTheme } from "@mui/material/styles";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTEPATH } from "../../ROUTEPATH";
function LandingPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.up("lg"));

  const rides = [
    {
      title: "One Day trip",
      imgs: padhmanabha,
      subHead:
        "Experience the best of Trivandrum in just one day with our expertly curated one-day trip. Explore the city's highlights, savor local cuisine, and create lasting memories in 24 hours.",
      nav: ROUTEPATH.MAIN + ROUTEPATH.ONEDAY,
    },
    {
      title: "Airport Pickup & Drop",
      imgs: airport,
      subHead:
        "Arriving or departing from Trivandrum's airport has never been easier. Our airport pickup and drop service ensures a smooth and stress-free transition to and from your flight.",
      nav: ROUTEPATH.MAIN + ROUTEPATH.PICKDROP,
    },
    {
      title: "Tour Plan to explore",
      imgs: airport,
      subHead:
        "Unveil the treasures of Trivandrum with our meticulously crafted tour plans. From ancient temples to scenic beaches. Let us be your guide to an unforgettable Trivandrum experience.",
      nav: ROUTEPATH.MAIN + ROUTEPATH.TOURPLAN,
    },
  ];
  return (
    <>
      <div
        style={{
          marginTop: isLargeDeviceUp ? "3.33vh" : "5vh",
          height: "100%",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        {/* <Box width={"99vw"}> */}
        <Box
          sx={{
            backgroundImage: `url("${landImage}")`,

            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height: isMobile || isDeviceDown ? "400px" : "600px",
            minWidth: "100%",
            // filter: "brightness(50% )",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.4)",
              width: "100%",
            }}
          >
            <Container
              fixed
              sx={{
                height: "100%",
              }}
            >
              <Box
                height={"100%"}
                sx={{ padding: isMobile || isDeviceDown ? "20px" : "" }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                  alignItems={
                    isMobile || isDeviceDown ? "center" : "flex-start"
                  }
                  justifyContent={"center"}
                  sx={{
                    height: "100%",
                    width: isMobile || isDeviceDown ? "100%" : "50%",
                  }}
                >
                  <Typography
                    variant={isMobile || isDeviceDown ? "h3" : "h2"}
                    sx={{
                      fontFamily:
                        isMobile || isDeviceDown
                          ? "Barlow-Medium"
                          : "Barlow-SemiBold",
                      color: THEMEColor.PRIMARY,
                      textAlign: isMobile || isDeviceDown ? "center" : "left",
                    }}
                  >
                    Experience the beauty of Kerala
                  </Typography>
                  <Typography
                    variant={isMobile || isDeviceDown ? "caption" : "body1"}
                    sx={{
                      fontFamily: "Barlow-Regular",
                      color: THEMEColor.PRIMARY,
                    }}
                  >
                    We make your trip memorable and peaceful. We offer
                    affordable and convenient Travel plans for everyone.
                  </Typography>
                  <Button
                    className="book-trip-btn"
                    sx={{ boxShadow: 0 }}
                    variant="contained"
                  >
                    Book a Trip
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        {/* </Box> */}

        {/* AboutUs */}
        <Box
          sx={{
            width: "100%",
            height: "30%",
            backgroundColor: THEMEColor.PRIMARY,
          }}
        >
          <Container fixed sx={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                // padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="about-box"
            >
              {/* <Typography
                variant="h4"
                sx={{
                  fontFamily: "Barlow-Bold",
                  color: THEMEColor.PRIMARY,
                }}
                className="aboutus-text"
              >
                About Us
              </Typography> */}

              <Grid container height={"100%"} alignItems={"center"}>
                <Grid item md={6} sm={0} xs={0}>
                  {isMobile || isDeviceDown ? null : (
                    <Box
                      height={"50%"}
                      className="about-img"
                      width={"70%"}
                      // borderRadius="50%"
                    >
                      {/* <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        width={"100%"}
                        // gap={"20px"}
                      >
                        <Box width="50%"> */}
                      <img src={ttmCar1} height={"90%"} width={"100%"} />
                      {/* </Box>
                        <Box width={"50%"}>
                          <img src={ttmCard1} height={"100%"} width={"100%"} />
                        </Box>
                      </Box> */}
                    </Box>
                  )}
                </Grid>
                <Grid item md={6}>
                  <Box
                    height="100%"
                    display={"flex"}
                    flexDirection={"column"}
                    gap="20px"
                  >
                    <Typography
                      variant="h5"
                      className="about-company"
                      sx={{
                        textAlign: isMobile || isDeviceDown ? "center" : "",
                      }}
                    >
                      <span></span>About Our Company
                    </Typography>
                    <Typography
                      variant={isMobile || isDeviceDown ? "h5" : "h4"}
                      sx={{
                        fontFamily: "Poppins-SemiBold",
                        color: THEMEColor.buttons,
                        textAlign: isMobile || isDeviceDown ? "center" : "",
                      }}
                    >
                      We are your trusted companion for exploring the enchanting
                      city of Kerala{" "}
                    </Typography>
                    <Typography
                      variant={isMobile || isDeviceDown ? "caption" : "body2"}
                      sx={{
                        fontFamily: "Poppins-Regular",
                        color: THEMEColor.buttons,
                        textAlign: isMobile || isDeviceDown ? "center" : "",
                      }}
                    >
                      We strive to make your travel experience the best and most
                      affordable. Our team of experienced professionals is
                      dedicated to bringing you the best of Kerala, whether
                      you’re looking for a taxi service, site-seeing, or
                      planning a trip with us. Choose us for a seamless and
                      memorable travel experience.
                    </Typography>
                    <Box>
                      <Typography
                        variant={"h5"}
                        fontFamily={"Barlow-Regular"}
                        sx={{ color: THEMEColor.buttons }}
                      >
                        Call For Request
                      </Typography>
                      <Typography
                        variant={isMobile || isDeviceDown ? "h4" : "h3"}
                        fontFamily={"Barlow-Bold"}
                        sx={{ color: THEMEColor.Secondary }}
                      >
                        +91-8086040400
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        {/* What we offer */}
        <Box
          sx={{
            width: "100%",
            height: "60%",
            background: ` linear-gradient(white,white) bottom/100% 40% no-repeat,url(${kathak}) center/cover no-repeat`,
          }}
        >
          <Box
            height={"100%"}
            sx={{
              background:
                "linear-gradient(white,white) bottom/100% 40% no-repeat,rgba(0,0,0, 0.7) center/cover no-repeat ",
            }}
          >
            <Container fixed sx={{ width: "100%", height: "100%" }}>
              <Box height={"100%"}>
                <Box
                  height="100%"
                  display={"flex"}
                  flexDirection={"column"}
                  gap="20px"
                  padding={"20px"}
                  alignItems={"center"}
                  // sx={{ transform: "translateY(15%)" }}
                  // justifyContent="inherit/"
                >
                  <Typography variant="h5" className="about-company">
                    <span></span>What we Offer{" "}
                  </Typography>
                  <Box
                    width={"60%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap="10px"
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Poppins-SemiBold",
                        color: THEMEColor.PRIMARY,
                        textAlign: "center",
                        lineHeight: "40px",
                      }}
                    >
                      Craft your Unforgettable memories with Trivandrum Trip
                      Maker
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins-Regular",
                        color: THEMEColor.PRIMARY,
                        textAlign: "center",
                        lineHeight: "20px",
                      }}
                    >
                      Our passion lies in crafting unforgettable travel moments
                      for every traveler who chooses us. With our range of
                      services, we transform ordinary trips into extraordinary
                      adventures.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "30px",
                      height: "60%",
                      width: "100%",
                    }}
                  >
                    {rides.map((i) => {
                      return (
                        <>
                          <Card
                            sx={{ borderRadius: 0, boxShadow: 0 }}
                            className="card-trip"
                          >
                            <CardMedia
                            // component={"img"}
                            // alt="title"
                            // image={i.imgs}
                            // height="300px"
                            >
                              {" "}
                              <img
                                src={i.imgs}
                                alt={i.title}
                                height={"300px"}
                                className="card-img"
                              />{" "}
                            </CardMedia>
                            <CardContent>
                              <Box
                                width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                gap="10px"
                              >
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // lineHeight: "40px",
                                  }}
                                >
                                  {i.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontFamily: "Poppins-Regular",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // lineHeight: "20px",
                                  }}
                                >
                                  {i.subHead}
                                </Typography>
                              </Box>
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                sx={{ borderRadius: 0, boxShadow: 0 }}
                                fullWidth
                                className="learnmore-btn"
                                onClick={() => navigate(i.nav)}
                              >
                                Book Now &nbsp;{" "}
                                <ArrowForwardIcon
                                  sx={{ transition: "0.2s all" }}
                                  className="arrow-icn"
                                />
                              </Button>
                            </CardActions>
                          </Card>
                        </>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box></Box>
      </div>
      <Container fixed sx={{ height: "100%" }}></Container>
    </>
  );
}

export default LandingPage;
