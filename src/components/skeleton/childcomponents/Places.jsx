import React, { useEffect } from "react";
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
  Alert,
  Stack,
} from "@mui/material";
import oneDay from "../../../assets/images/places/oneday.jpg";
import { styled, useTheme } from "@mui/material/styles";
import { THEMEColor } from "../../../assets/THEMES";
import { cards } from "../../../assets/rides";
import tourImg from "../../../assets/images/tour/tour.jpg"
import { useLocation } from "react-router";
import HeaderHelmet from "../../HeaderHelmet";
function Places() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const location=useLocation()
  const pathname=location.pathname
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);
  return (<>
  <HeaderHelmet value={"Trivandrum Trip Maker"} />{" "}
    <div
    style={{
      marginTop: isDevice ? "9px" :isMobile||isDeviceDown?"-33.3px": "-28px",
      height: "100%",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",justifyContent:"space-between"
    }}
  >
         <Box
          sx={{
            backgroundImage: `url("${tourImg}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition:
            isMobile || isDeviceDown ? "80% 100%" : "100% 50% ",
          backgroundAttachment:
            isMobile || isDeviceDown ? "initial" : "fixed",
          // backgroundSize: "cover",
          height: isMobile || isDeviceDown ? "400px" : "400px",
            backgroundSize: "cover",
            minWidth: "100%",
            // filter: "brightness(50% )",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.6)",
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
                  <span></span>Places
                </Typography>
                <Typography
                  variant={isMobile || isDeviceDown ? "h5" : "h4"}
                  sx={{
                    fontFamily: "Poppins-SemiBold",
                    color: THEMEColor.PRIMARY,
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  <span></span>
                  Trivandrum, the capital of Kerala, is a vibrant city with a
                  rich history and culture.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <div style={{width:"100%",height:"100%"}}>
        <Container fixed  sx={{width:"100%",height:"100%"}}>
          <Box
            // sx={{
            //   display: "flex",
            //   flexDirection: isMobile || isDeviceDown ? "column" : "row",
            //   justifyContent: "space-between",
            //   gap: "30px",
            //   height: "60%",
            //   width: "100%",
            // }}
            sx={{
              display: "grid",
              gridTemplateColumns:
                isMobile || isDeviceDown ? "100%" : "33% 33% 33%",
              justifyContent: "space-between",
              marginTop: "20px",
              width:"100%"
            }}
          >
            {cards.map((i, index) => {
              return (
                <>
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: 0,
                      boxShadow: 0,
                      marginTop: "30px",
                    }}
                    className="card-trip"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 1,
                      delay: index === 0 ? 0.1 : index === 1 ? 0.4 : 0.9,
                      ease: [0, 0.5, 0.2, 1.01],
                    }}
                  >
                    <div
                      style={{
                        width: isMobile || isDeviceDown ? "100%" : "90%",
                        border: "2px solid #3dae2b",
                        overflow: "hidden",
                        height: "600px",
                        position: "relative",
                        borderRadius: "10px",
                      }}
                    >
                      <div className="place-card"></div>
                      <CardMedia
                        // component={"img"}
                        // alt="title"
                        // image={i.imgs}
                        // height="300px"
                        sx={{ overflow: "hidden" }}
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
                              color: "#51764b",
                              textAlign: "center",
                              // lineHeight: "40px",
                            }}
                          >
                            {i.title}
                          </Typography>
                          <Typography
                            variant={
                              isMobile || isDeviceDown ? "caption" : "body2"
                            }
                            sx={{
                              fontFamily: "Poppins-Regular",
                              color: THEMEColor.buttons,
                              textAlign: "center",
                              // lineHeight: "20px",
                              height: "160px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              zIndex: "1",
                            }}
                          >
                            {i.subHead}
                          </Typography>
                        </Box>
                      </CardContent>
                    </div>
                  </Card>
                </>
              );
            })}
          </Box>
        </Container>
      </div>
    </div>
  </>
  );
}

export default Places;
