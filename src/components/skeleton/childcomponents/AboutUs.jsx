import React, { useEffect, useRef, useState } from "react";
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
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Divider,
  IconButton,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  CallRounded as CallRoundedIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import oneDay from "../../../assets/images/places/oneday.jpg";
import moment from "moment";
import { THEMEColor } from "../../../assets/THEMES";
import { motion } from "framer-motion";
import ttmCar1 from "../../../assets/images/ttmcar1.jpeg";
import { rides } from "../../../assets/rides";
import kathak from "../../../assets/images/kerala_kathak.jpg";import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function AboutUs() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.down("lg"));
  const Typographymotion = motion(Typography);
  const Buttonmotion = motion(Button);
  const Cardmotion = motion(Card);
  const reqCallBackRef = useRef(null);
  const handleReqCallBackIntoView = () => {
    reqCallBackRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [reqACall, setReqACall] = useState({
    name: "",
    email: "",
    mobile: null,
    altMobile: null,
    noOfTravel: null,
    vehicle: "",
    travelDate: moment(),
    desc: "",
  });
  const exceptThisSymbols = ["e", "E", "+", "-", ".", "ArrowUp", "ArrowDown"];
  const vehicleType = ["4-Seater", "7-Seater", "12-Seater", "other"];
  const handleValueChange = (stateName, value) => {
    setReqACall({ ...reqACall, [stateName]: value });
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", reqACall);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  
  return (
    <>
      {" "}
      <div
        style={{
         marginTop:  isDevice ? "9px" : "-28px",
          height: "100%",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        <Box
          sx={{
            backgroundImage: `url("${oneDay}")`,
            backgroundPositionY: isMobile || isDeviceDown ? "50%" : "70%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height: isMobile || isDeviceDown ? "300px" : "350px",
            minWidth: "100%",
            // filter: "brightness(50% )",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.8)",
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

                <Box
                  height="100%"
                  display={"flex"}
                  flexDirection={"column"}
                  gap="20px"
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography
                    variant="h4"
                    className="about-company"
                    sx={{
                      textAlign: isMobile || isDeviceDown ? "center" : "",
                    }}
                  >
                    <span></span>About Us
                  </Typography>
                  <Typography
                    variant={isMobile || isDeviceDown ? "h6" : "h4"}
                    sx={{
                      fontFamily: "Poppins-SemiBold",
                      color: THEMEColor.PRIMARY,
                      textAlign: "center",
                      width: "60%",
                    }}
                  >
                    <span></span>
                    Discover Trivandrum Trip Maker: Your best Travel Companion
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
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
        <div id="bookAtrip" style={{ height: "100%", overflow: "auto" }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{}}
            // className="mySwiper"
          >
            {rides.map((i, ind) => {
              return (
                <>
                  <SwiperSlide>
                    {" "}
                    <Box
                      sx={{
                        width: "100%",
                        height: "500px",
                        backgroundImage: `url(${i.imgs})`,
                        backgroundSize:"cover",backgroundPosition:"100% 100%",
                        backgroundRepeat:"no-repeat"

                      }}
                    >
                      <Box
                        height={"100%"}
                        sx={{
                          backgroundColor: "rgba(0,0,0, 0.7)",
                        }}
                      >
                        <Container fixed sx={{ width: "100%", height: "100%" }}>
                          <Box
                            height={"100%"}
                            width={"100%"}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Box
                              height="100%"
                              display={"flex"}
                              flexDirection={"column"}
                              gap="20px"
                              padding={"20px"}
                              alignItems={"flex-start"}
                              justifyContent={"center"}
                            >
                              {" "}
                              <Typographymotion
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                // viewport={{ once: true, amount: 0.5 }}
                                transition={{
                                  duration: 0.9,
                                  delay: 0.4,
                                  ease: [0, 0.71, 0.2, 1.01],
                                }}
                                variant="h5"
                                className="about-company"
                              >
                                <span></span>
                                What we Offer
                              </Typographymotion>
                              <Box
                                width={
                                  isMobile || isDeviceDown ? "100%" : "60%"
                                }
                                display={"flex"}
                                flexDirection={"column"}
                                gap="30px"
                              >
                                <Typographymotion
                                  variant={
                                    isMobile || isDeviceDown ? "h5" : "h4"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.PRIMARY,
                                    textAlign: "left",
                                    lineHeight: "40px",
                                  }}
                                  initial={{ opacity: 0, x: 150 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  // viewport={{ once: true, amount: 0.5 }}
                                  transition={{
                                    duration: 0.9,
                                    delay: 0.4,
                                    ease: [0, 0.71, 0.2, 1.01],
                                  }}
                                >
                                  {i.title}
                                </Typographymotion>
                                <Typographymotion
                                  variant={
                                    isMobile || isDeviceDown ? "caption" : "h6"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Regular",
                                    color: THEMEColor.PRIMARY,
                                    textAlign: "left",
                                    lineHeight: "20px",
                                  }}
                                  initial={{ opacity: 0, x: 200 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  // viewport={{ once: true, amount: 0.5 }}
                                  transition={{
                                    duration: 0.9,
                                    delay: 0.4,
                                    ease: [0, 0.71, 0.2, 1.01],
                                  }}
                                >
                                  {i.subHead}
                                </Typographymotion>
                              </Box>
                              {ind === 0 ? null : (
                                <Buttonmotion
                                  initial={{ opacity: 0, x: 200 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  // viewport={{ once: true, amount: 0.5 }}
                                  transition={{
                                    duration: 0.9,
                                    delay: 0.4,
                                    ease: [0, 0.71, 0.2, 1.01],
                                  }}
                                  variant="contained"
                                  sx={{ borderRadius: 0, boxShadow: 0 }}
                                  // fullWidth
                                  className="learnmore-btn"
                                  onClick={() => navigate(i.nav)}
                                >
                                  Book Now &nbsp;{" "}
                                  <ArrowForwardIcon
                                    sx={{ transition: "0.2s all" }}
                                    className="arrow-icn"
                                  />
                                </Buttonmotion>
                              )}
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                {/* <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                  delay: 4000,
                                  disableOnInteraction: true,
                                }}
                                // pagination={{
                                //   clickable: true,
                                // }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                style={{}}
                                // className="mySwiper"
                              >
                                {rides.map((i, index) => {
                                  return (
                                    <>
                                      <SwiperSlide
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <Cardmotion
                                          sx={{
                                            borderRadius: 0,
                                            boxShadow: 0,
                                            width:
                                              isMobile || isDeviceDown ? "100%" : "60%",
                                          }}
                                          className="card-trip"
                                          // initial={{ opacity: 0, y: 100 }}
                                          // whileInView={{ opacity: 1, y: 0 }}
                                          // viewport={{ once: true, amount: 0.2 }}
                                          // transition={{
                                          //   duration: 1,
                                          //   delay:
                                          //     index === 0 ? 0.1 : index === 1 ? 0.4 : 0.9,
                                          //   ease: [0, 0.5, 0.2, 1.01],
                                          // }}
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
                                              />-- 
                                            </Button>
                                          </CardActions>
                                        </Cardmotion>
                                      </SwiperSlide>
                                    </>
                                  );
                                })}
                              </Swiper> */}
                              </Box>
                            </Box>
                          </Box>
                        </Container>
                      </Box>
                    </Box>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        <Box
          sx={{
            backgroundImage: `url("${oneDay}")`,
            backgroundPositionY: isMobile || isDeviceDown ? "50%" : "70%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height: isMobile || isDeviceDown ? "400px" : "350px",
            minWidth: "100%",
            // filter: "brightness(50% )",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.8)",
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
                sx={{
                  height: "100%",
                  // padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: isMobile || isDeviceDown ? "100%" : "60%",
                  justifyContent: "center",
                  gap: "20px",
                }}
                className="about-box"
              >
                <Typography
                  variant={isMobile || isDeviceDown ? "h5" : "h4"}
                  sx={{
                    fontFamily:
                      isMobile || isDeviceDown
                        ? "Poppins-Medium"
                        : "Poppins-SemiBold",
                    color: THEMEColor.PRIMARY,
                    textAlign: isMobile || isDeviceDown ? "center" : "",
                  }}
                >
                  Call Us Now{" "}
                  <span style={{ color: THEMEColor.Secondary }}>
                    Book Your Ride
                  </span>{" "}
                  For Your Next Wonderful Journey!
                </Typography>{" "}
                <Typography
                  variant={isMobile || isDeviceDown ? "caption" : "body2"}
                  sx={{
                    fontFamily: "Poppins-Regular",
                    color: THEMEColor.PRIMARY,
                    textAlign: isMobile || isDeviceDown ? "center" : "",
                  }}
                >
                  We are your trusted companion for exploring the enchanting
                  city of Kerala.Choose us for a seamless and memorable travel
                  experience.
                </Typography>
                <Box
                  display="flex"
                  gap={"10px"}
                  height="20%"
                  justifyContent={
                    isMobile || isDeviceDown ? "center" : "flex-start"
                  }
                  width={"100%"}
                >
                  <Box display="flex" alignItems={"center"}>
                    <IconButton
                      disableFocusRipple
                      disableTouchRipple
                      disableRipple
                      sx={{
                        borderRadius: 0,
                        ":active": { borderRadius: 0 },
                        backgroundColor: "#313b30",
                        color: THEMEColor.Secondary,
                        padding: "10px",
                      }}
                    >
                      <CallRoundedIcon />
                    </IconButton>
                  </Box>
                  <Box
                    height={"100%"}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start "}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily:
                          isMobile || isDeviceDown
                            ? "Poppins-Medium"
                            : "Poppins-SemiBold",
                        color: THEMEColor.PRIMARY,
                      }}
                    >
                      Contact Number
                    </Typography>
                    <Typography
                      variant={isMobile || isDeviceDown ? "h5" : "h4"}
                      sx={{
                        fontFamily:
                          isMobile || isDeviceDown
                            ? "Poppins-SemiBold"
                            : "Poppins-Bold",
                        color: THEMEColor.Secondary,
                      }}
                    >
                      +918086040400
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default AboutUs;
