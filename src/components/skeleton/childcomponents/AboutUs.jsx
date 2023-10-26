import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Card,
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
import kathak from "../../../assets/images/kerala_kathak.jpg";
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
import { ROUTEPATH } from "../../ROUTEPATH";
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
          marginTop: isDevice
            ? "9px"
            : isMobile || isDeviceDown
            ? "-33.3px"
            : "-28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        <Box
          sx={{
            backgroundColor: THEMEColor.buttons,
            // backgroundImage: `url("${oneDay}")`,
            // backgroundPositionY: isMobile || isDeviceDown ? "50%" : "70%",
            // backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
            // backgroundSize: "cover",
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
                    Discover &nbsp;
                    <span className="highlight-text">
                      <a onClick={() => navigate(ROUTEPATH.MAIN)}>
                        Trivandrum Trip Maker
                      </a>
                    </span>
                    &nbsp;: Your best Travel Companion
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        {/* AboutUs */}
        <AboutUsPart />
        <WhatWeOfferPart />
        <CallUsNowPart
          theme={theme}
          isDeviceDown={isDeviceDown}
          isMobile={isMobile}
          THEMEColor={THEMEColor}
          oneDay={oneDay}
        />
      </div>
    </>
  );
}

export default AboutUs;
