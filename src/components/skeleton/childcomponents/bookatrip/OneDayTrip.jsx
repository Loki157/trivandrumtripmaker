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
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Call as CallIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { THEMEColor } from "../../../../assets/THEMES";
import { useTheme } from "@mui/material/styles";
import "../../../../styles/OneDayTrip.css";
import oneDay from "../../../../assets/images/places/oneday.jpg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
function OneDayTrip() {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.up("lg"));

  const reqCallBackRef = useRef(null);
  const handleReqCallBackIntoView = () => {
    reqCallBackRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);
  const [reqACall, setReqACall] = useState({
    name: "",
    email: "",
    mobile: "",
    altMobile: "",
    noOfTravel: "",
    vechile: "",
    travelDate: "",
    desc: "",
  });

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {" "}
      {isVisible && (
        <button
          className="scroll-to-top-button"
          onClick={handleReqCallBackIntoView}
        >
          Scroll to Top
        </button>
      )}
      <div
        style={{
          marginTop: isLargeDeviceUp ? "8vh" : "6vh",
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
                    variant="h5"
                    className="about-company"
                    sx={{
                      textAlign: isMobile || isDeviceDown ? "center" : "",
                    }}
                  >
                    <span></span>One day Trip
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
                    Kerala&apos;s Best One-Day Trip Experience with &nbsp;
                    <span style={{ color: THEMEColor.Secondary }}>
                      Trivandrum Trip Maker
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>

        <Box sx={{ height: "100%", width: "100%" }}>
          <Container fixed sx={{ height: "100%", width: "100%" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                height: "100%",
                width: "100%",
                paddingTop: "20px",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant={isMobile || isDeviceDown ? "h6" : "h5"}
                  sx={{
                    fontFamily: "Poppins-Bold",
                    color: THEMEColor.buttons,
                    textAlign: "center",
                    // width: "80%",
                  }}
                  className="oneday-heading"
                >
                  Description
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins-Medium",
                    color: THEMEColor.buttons,
                    // textAlign: "center",
                    // lineHeight: "20px",
                  }}
                >
                  Are you looking for a quick escape from the daily grind?
                  Perhaps you have a day to spare and a thirst for exploration.
                  At Trivandrum Trip Maker Cab and Tour Website, we understand
                  the value of a single day and the endless possibilities it
                  holds. That&apos;s why we&apos;ve meticulously crafted our
                  one-day trip experience to help you make the most of your
                  precious time. Discover the magic of Trivandrum in a single
                  day with our expertly curated one-day trip. Our guided
                  adventure offers a taste of the city&apos;s cultural heritage,
                  natural wonders, and culinary delights. From historic temples
                  to tranquil beaches, immerse yourself in the essence of
                  Trivandrum.
                </Typography>
              </Box>

              {/* Request CallBack */}
              <Box
                ref={reqCallBackRef}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant={isMobile || isDeviceDown ? "h6" : "h5"}
                    sx={{
                      fontFamily: "Poppins-Bold",
                      color: THEMEColor.buttons,
                      textAlign: "center",
                      // width: "80%",
                    }}
                    className="oneday-heading"
                  >
                    Request a CallBack
                  </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} width="100%">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center",
                      width: "50%",
                    }}
                  >
                    {" "}
                    <Box
                      display={"flex"}
                      gap="20px"
                      width="100%"
                      justifyContent={"center"}
                    >
                      <FormControl required fullWidth>
                        <FormLabel>Full Name</FormLabel>
                        <TextField variant="outlined" />
                      </FormControl>
                      <FormControl required fullWidth>
                        <FormLabel>Email Id</FormLabel>
                        <TextField variant="outlined" />
                      </FormControl>
                    </Box>
                    <Box
                      display={"flex"}
                      gap="20px"
                      width="100%"
                      justifyContent={"center"}
                    >
                      <FormControl required fullWidth>
                        <FormLabel>Your Phone number</FormLabel>
                        <TextField variant="outlined" />
                      </FormControl>
                      <FormControl fullWidth>
                        <FormLabel>Alternate Phone(Optional)</FormLabel>
                        <TextField variant="outlined" />
                      </FormControl>
                    </Box>
                    <FormControl required fullWidth>
                      <FormLabel>No.of Travelers</FormLabel>
                      <TextField variant="outlined" />
                    </FormControl>
                    <Box
                      display={"flex"}
                      gap="20px"
                      width="100%"
                      justifyContent={"center"}
                    >
                      <FormControl required fullWidth>
                        <FormLabel>Vehicle Type</FormLabel>
                        <Select variant="outlined">
                          <MenuItem>4-Seater</MenuItem>
                          <MenuItem>7-Seater</MenuItem>
                          <MenuItem>12-Seater</MenuItem>
                          <MenuItem>Other</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required fullWidth>
                        <FormLabel
                        // sx={{ fontWeight: "bold" }}
                        // style={{
                        //   color:
                        //     isFocused.expiry_date_from === true &&
                        //     (formikProps.errors.expiry_date_from ===
                        //       undefined ||
                        //       formikProps.touched.expiry_date_from ===
                        //         undefined)
                        //       ? "#1976d5"
                        //       : formikProps.errors
                        //           .expiry_date_from !== undefined &&
                        //         formikProps.touched
                        //           .expiry_date_from === true
                        //       ? "#de6363"
                        //       : "#666666",
                        // }}
                        >
                          Travel Date
                        </FormLabel>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            name="expiry_date_from"
                            // value={formikProps.values.expiry_date_from}
                            format="DD-MM-YYYY"
                            // onChange={(val) => {
                            //   formikProps.setFieldValue(
                            //     "expiry_date_from",
                            //     val
                            //   );
                            // }}
                            // slotProps={{
                            //   textField: {
                            //     helperText: formikProps.touched
                            //       .expiry_date_from && (
                            //       <CustomErrorMessage
                            //         name="expiry_date_from"
                            //         formikName="from"
                            //       />
                            //     ),
                            //     error:
                            //       formikProps.touched
                            //         .expiry_date_from &&
                            //       Boolean(
                            //         formikProps.errors.expiry_date_from
                            //       ),
                            //     onFocus: () => {
                            //       setIsFocused({
                            //         ...isFocused,
                            //         expiry_date_from: true,
                            //       });
                            //     },
                            //     onBlur: (even) => {
                            //       setIsFocused({
                            //         ...isFocused,
                            //         expiry_date_from: false,
                            //       });
                            //       formikProps.setFieldTouched(
                            //         "expiry_date_from"
                            //       );
                            //     },
                            //   },
                            // }}
                            disablePast
                            // minDate={yesterday}
                            // maxDate={
                            //   formikProps.values.expiry_date_to ||
                            //   maxDate
                            // }
                          />
                        </LocalizationProvider>
                        {/* {formikProps.touched.expiry_date_from &&
                                formikProps.errors.expiry_date_from ? (
                                  <FormHelperText sx={{ display: "none" }}>
                                    none
                                  </FormHelperText>
                                ) : (
                                  <FormHelperText sx={{ color: "#de6363" }}>
                                    {" "}
                                    {formikProps.errors.expiry_date_from}
                                  </FormHelperText>
                                )} */}
                      </FormControl>
                    </Box>
                    <FormControl fullWidth>
                      <FormLabel> Description (Optional)</FormLabel>
                      <TextField multiline variant="outlined" />
                    </FormControl>
                    <Button
                      variant="contained"
                      fullWidth
                      className="learnmore-btn"
                    >
                      Submit
                    </Button>
                    <Divider
                      sx={{
                        width: "100%",
                        "::before": {
                          borderTop: `2px solid ${THEMEColor.buttons}`,
                        },
                        "::after": {
                          borderTop: `2px solid ${THEMEColor.buttons}`,
                        },
                      }}
                      textAlign="center"
                    >
                      <b>OR</b>
                    </Divider>
                    <Box
                      display={"flex"}
                      gap="20px"
                      width="100%"
                      justifyContent={"center"}
                    >
                      {" "}
                      <Button
                        variant="contained"
                        className="learnmore-btn"
                        fullWidth
                        startIcon={<CallIcon />}
                      >
                        +918086040400
                      </Button>{" "}
                      <Button
                        variant="contained"
                        className="learnmore-btn"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* ==------- */}
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default OneDayTrip;
