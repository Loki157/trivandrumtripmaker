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
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import {
  ArrowForward as ArrowForwardIcon,
  ArrowUpwardRounded as ArrowUpwardRoundedIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTEPATH } from "../../ROUTEPATH";
import { motion } from "framer-motion";
import { rides } from "../../../assets/rides";
import { imageListData } from "../../../assets/imageListData";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function LandingPage() {
  const Typographymotion = motion(Typography);
  const Buttonmotion = motion(Button);
  const Cardmotion = motion(Card);
  const bookAtrip = useRef(null);
  const handleScrollToBookTrip = () => {
    bookAtrip.current.scrollIntoView({ behavior: "smooth" });
  };
  // useEffect(() => {
  //    window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.up("lg"));

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      {" "}
      {/* {isVisible && (
        <IconButton className="scroll-to-top-button" onClick={scrollToTop}>
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )} */}
      <div
        style={{
          marginTop: isLargeDeviceUp
            ? "3.33vh"
            : isMobile || isDeviceDown
            ? "-4vh"
            : "5vh",
          height: "100%",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        {/* <Box width={"99vw"}> */}
        <Box
          sx={{
            backgroundImage: `url("${kathak}")`,

            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height: isMobile || isDeviceDown ? "400px" : "600px",
            minWidth: "100%",
            maxWidth: "100%",
            imageRendering: "auto",
            // backgroundPositionY:"10%"
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              // background: " rgba(0,0,0, 0.4)",
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
                  <Typographymotion
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
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
                  </Typographymotion>
                  <Typographymotion
                    variant={isMobile || isDeviceDown ? "caption" : "body1"}
                    sx={{
                      fontFamily: "Barlow-Regular",
                      color: THEMEColor.PRIMARY,
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.7,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    We make your trip memorable and peaceful. We offer
                    affordable and convenient Travel plans for everyone.
                  </Typographymotion>
                  <Buttonmotion
                    className="book-trip-btn"
                    sx={{ boxShadow: 0 }}
                    variant="contained"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    onClick={handleScrollToBookTrip}
                  >
                    Book a Trip
                  </Buttonmotion>
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
                      <motion.img
                        src={ttmCar1}
                        height={"90%"}
                        width={"100%"}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.9,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      />
                      {/* </Box>
                        <Box width={"50%"}>
                          <img src={ttmCard1} height={"100%"} width={"100%"} />
                        </Box>
                      </Box> */}
                    </Box>
                  )}
                </Grid>
                <Grid item md={6}>
                  <motion.div
                    height="100%"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
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
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={
                        isMobile || isDeviceDown ? "center" : "flex-start"
                      }
                    >
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
                  </motion.div>
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
              <Box height={"100%"} width={"100%"}>
                <Box
                  height="100%"
                  display={"flex"}
                  flexDirection={"column"}
                  gap="20px"
                  padding={"20px"}
                  alignItems={"center"}
                  // width={"100%"}
                  // sx={{ transform: "translateY(15%)" }}
                  // justifyContent="inherit/"
                >
                  <Typographymotion
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    variant="h5"
                    className="about-company"
                  >
                    <span></span>What we Offer{" "}
                  </Typographymotion>
                  <Box
                    width={isMobile || isDeviceDown ? "100%" : "60%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap="10px"
                  >
                    <Typographymotion
                      variant={isMobile || isDeviceDown ? "h5" : "h4"}
                      sx={{
                        fontFamily: "Poppins-SemiBold",
                        color: THEMEColor.PRIMARY,
                        textAlign: "center",
                        lineHeight: "40px",
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      Craft your Unforgettable memories with Trivandrum Trip
                      Maker
                    </Typographymotion>
                    <Typographymotion
                      ref={bookAtrip}
                      variant={isMobile || isDeviceDown ? "caption" : "body2"}
                      sx={{
                        fontFamily: "Poppins-Regular",
                        color: THEMEColor.PRIMARY,
                        textAlign: "center",
                        lineHeight: "20px",
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      Our passion lies in crafting unforgettable travel moments
                      for every traveler who chooses us. With our range of
                      services, we transform ordinary trips into extraordinary
                      adventures.
                    </Typographymotion>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection:
                        isMobile || isDeviceDown ? "column" : "row",
                      justifyContent: "space-between",
                      gap: "30px",
                      height: "60%",
                      width: "100%",
                    }}
                  >
                    {rides.map((i, index) => {
                      return (
                        <>
                          <Cardmotion
                            sx={{
                              borderRadius: 0,
                              boxShadow: 0,
                              width: isMobile || isDeviceDown ? "100%" : "75%",
                            }}
                            className="card-trip"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                              duration: 1,
                              delay:
                                index === 0 ? 0.1 : index === 1 ? 0.4 : 0.9,
                              ease: [0, 0.5, 0.2, 1.01],
                            }}
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
                                    fontFamily:
                                      isMobile || isDeviceDown
                                        ? "Poppins-SemiBold"
                                        : "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // lineHeight: "40px",
                                  }}
                                >
                                  {i.title}
                                </Typography>
                                <Typography
                                  variant={
                                    isMobile || isDeviceDown
                                      ? "caption"
                                      : "body2"
                                  }
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
                          </Cardmotion>
                        </>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box height="100%">
          <Container fixed sx={{ height: "100%" }}>
            <Box
              height="100%"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Box>
                {" "}
                <Typography
                  variant={isMobile || isDeviceDown ? "h6" : "h5"}
                  sx={{
                    fontFamily: "Poppins-Bold",
                    color: THEMEColor.buttons,
                    textAlign: "center",
                    // width: "80%",
                    my: 2,
                  }}
                  className="oneday-heading"
                >
                  Gallery
                </Typography>
              </Box>

              <ImageList
                sx={{ width: "100%", height: "100%" }}
                variant="quilted"
                cols={3}
                rowHeight={121}
              >
                {imageListData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Container>
        </Box>
      </div>
      <Container fixed sx={{ height: "100%" }}></Container>
    </>
  );
}

export default LandingPage;
