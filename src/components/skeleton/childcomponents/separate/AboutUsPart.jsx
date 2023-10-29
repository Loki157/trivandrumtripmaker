import React, { useRef } from "react";
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
import { THEMEColor } from "../../../../assets/THEMES";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import ttmCar1 from "../../../../assets/images/ttmcar1.jpeg";
import { useNavigate } from "react-router";
import { ROUTEPATH } from "../../../ROUTEPATH";
function AboutUsPart({ bookAtrip }) {
  const theme = useTheme();
  const Typographymotion = motion(Typography);
  const Buttonmotion = motion(Button);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
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
                  delay: 0.4,
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
                  affordable. Our team of experienced professionals is dedicated
                  to bringing you the best of Kerala, whether you’re looking for
                  a{" "}
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.PICKDROP)}>
                      taxi service
                    </a>
                  </span>
                  ,{" "}
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.ONEDAY)}>
                      site-seeing
                    </a>
                  </span>
                  , or{" "}
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.TOURPLAN)}>
                      planning a trip
                    </a>
                  </span>
                  &nbsp;with us. Choose us for a seamless and memorable travel
                  experience.
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
                  <Box
                    height={"100%"}
                    display="flex"
                    flexDirection={isMobile || isDeviceDown ? "column" : "row"}
                    // justifyContent={"space-around"}
                    // alignItems={"flex-start "}
                    gap={isMobile || isDeviceDown ? "2px" : "20px"}
                  >
                    <a
                      href="tel:+918086040400"
                      style={{ textDecoration: "none" }}
                    >
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
                    </a>
                    <span
                      style={{
                        color: THEMEColor.buttons,
                        fontFamily: "Poppins-Bold",
                        textAlign: "center",
                      }}
                    >
                      Or
                    </span>
                    <a
                      href="tel:+918547676840"
                      style={{ textDecoration: "none" }}
                    >
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
                        +918547676840
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUsPart;
