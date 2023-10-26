import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
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
  import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { rides } from '../../../../assets/rides';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import whtaWeOfferMob from "../../../../assets/images/oneday/whatweoffermob.jpg";
import { THEMEColor } from '../../../../assets/THEMES';
function WhatWeOfferPart() { const Typographymotion = motion(Typography);
    const Buttonmotion = motion(Button);
    const Cardmotion = motion(Card);
   const theme = useTheme();
    const navigate = useNavigate();
  
    const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isDevice = useMediaQuery(theme.breakpoints.up("md"));
    const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
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
                        backgroundImage:
                          ind === 0
                            ? isMobile || isDeviceDown
                              ? `url(${whtaWeOfferMob})`
                              : `url(${i.imgs})`
                            : `url(${i.imgs})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
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
  )
}

export default WhatWeOfferPart