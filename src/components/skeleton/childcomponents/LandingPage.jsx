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
// import kathak from "../../../assets/images/kerala_kathak.jpg";
// import kathak from "../../../assets/images/image-list/mohiniyattamFlip2.jpg";
// import kathak from "../../../assets/images/mohiniyattamFlip.jpg";
// import kathak from "../../../assets/images/kathakali_87.jpg";
import kathak from "../../../assets/images/image-list/mohiniyattam_91.jpg";
// import kathak from "../../../assets/images/image-list/kathakali_87Land.jpg";
import padhmanabha from "../../../assets/images/places/Padmanabhaswamy_temple.jpg";
import airport from "../../../assets/images/places/airport.jpg";
import whtaWeOfferMob from "../../../assets/images/oneday/whatweoffermob.jpg";
// -------//
import { THEMEColor } from "../../../assets/THEMES";
import { useTheme } from "@mui/material/styles";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowUpwardRounded as ArrowUpwardRoundedIcon,
  NavigateBeforeRounded as NavigateBeforeRoundedIcon,
  NavigateNextRounded as NavigationNextRoundedIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTEPATH } from "../../ROUTEPATH";
import { motion } from "framer-motion";
import { rides } from "../../../assets/rides";
import { imageListData2 } from "../../../assets/imageListData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AboutUsPart from "./separate/AboutUsPart";
import WhatWeOfferPart from "./separate/WhatWeOfferPart";
import CallUsNowPart from "./separate/CallUsNowPart";
import HeaderHelmet from "../../HeaderHelmet";
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
    document?.querySelector("#bookAtrip").scrollIntoView();
    bookAtrip.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  // useEffect(() => {
  //    window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <HeaderHelmet value={"Trivandrum Trip Maker"} />{" "}
      {/* {isVisible && (
        <IconButton className="scroll-to-top-button" onClick={scrollToTop}>
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )} */}
      <div
        style={{
          marginTop: isDevice
            ? "9px"
            : isMobile || isDeviceDown
            ? "-33.3px"
            : "-28px",
          height: "100%",
          overflow: "auto",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        {/* <Box width={"99vw"}> */}
        <Box
          sx={{
            background: `url("${kathak}") no-repeat fixed center center`,
            backgroundPosition:
              isMobile || isDeviceDown ? "80% 100%" : "100% 50% ",
            backgroundAttachment:
              isMobile || isDeviceDown ? "initial" : "fixed",
            // backgroundSize: "cover",
            height: isMobile || isDeviceDown ? "500px" : "700px",
          }}
          className="land-main-img"
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.3)",
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
                      background: " rgba(0,0,0, 0.5)",
                      borderRadius: "5px",
                      padding: "5px",
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
                    affordable and convenient Travel plans Like{" "}
                    <span className="highlight-text">
                      <a onClick={() => navigate(ROUTEPATH.ONEDAY)}>
                        One day trip
                      </a>
                    </span>
                    ,{" "}
                    <span className="highlight-text">
                      <a onClick={() => navigate(ROUTEPATH.PICKDROP)}>
                        Airport Pickup & Drop
                      </a>
                    </span>{" "}
                    and{" "}
                    <span className="highlight-text">
                      <a onClick={() => navigate(ROUTEPATH.TOURPLAN)}>
                        {" "}
                        Tour Plan
                      </a>
                    </span>{" "}
                    for everyone.
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
        <AboutUsPart bookAtrip={bookAtrip} />
        {/* What we offer */}
        <WhatWeOfferPart />
        <br />
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
                {imageListData2.map((item) => (
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
        <CallUsNowPart
          theme={theme}
          isDeviceDown={isDeviceDown}
          isMobile={isMobile}
          THEMEColor={THEMEColor}
          oneDay={padhmanabha}
        />
      </div>
    </>
  );
}

export default LandingPage;
