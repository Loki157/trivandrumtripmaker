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
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { THEMEColor } from "../../../../assets/THEMES";
import { styled, useTheme } from "@mui/material/styles";
import "../../../../styles/OneDayTrip.css";
import oneDay from "../../../../assets/images/places/oneday.jpg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { itineraryTemple } from "./OnedayTripData";
import moment from "moment";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "10px",
  backgroundColor: THEMEColor.Secondary,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: THEMEColor.PRIMARY }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  //flexDirection: 'row-reverse',
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: THEMEColor.PRIMARY,
  borderTop: `1px solid ${THEMEColor.PRIMARY}`,
}));
function OneDayTrip() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobileUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.down("lg"));

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
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {" "}
      {isVisible && (
        <button
          className="scroll-to-top-button"
          onClick={handleReqCallBackIntoView}
        >
          Check
        </button>
      )}
      <div
        style={{
          marginTop: isLargeDeviceUp ? "7.1vh" : isDevice ? "4.8vh" : "5vh",
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

              {/* --------------------Request CallBack ---------------------------*/}
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
                      width: isMobile || isDeviceDown ? "100%" : "60%",
                    }}
                  >
                    {" "}
                    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                      <Box
                        display={"flex"}
                        gap="20px"
                        width="100%"
                        justifyContent={"center"}
                      >
                        <FormControl required fullWidth>
                          <FormLabel>Full Name</FormLabel>
                          <TextField
                            required
                            variant="outlined"
                            name="name"
                            value={reqACall.name}
                            onChange={(e) => {
                              handleValueChange("name", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormControl required fullWidth>
                          <FormLabel>Email Id</FormLabel>
                          <TextField
                            required
                            variant="outlined"
                            name="email"
                            value={reqACall.email}
                            onChange={(e) => {
                              handleValueChange("email", e.target.value);
                            }}
                          />
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
                          <TextField
                            required
                            variant="outlined"
                            type="number"
                            name="mobile"
                            value={reqACall.mobile}
                            onWheel={(e) => {
                              e.preventDefault();
                              e.target.blur();
                            }}
                            onKeyDown={(e) =>
                              exceptThisSymbols.includes(e.key) &&
                              e.preventDefault()
                            }
                            onChange={(e) => {
                              handleValueChange("mobile", e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormControl fullWidth>
                          <FormLabel>Alternate Phone(Optional)</FormLabel>
                          <TextField
                            variant="outlined"
                            type="number"
                            name="altMobile"
                            value={reqACall.altMobile}
                            onWheel={(e) => {
                              e.preventDefault();
                              e.target.blur();
                            }}
                            onKeyDown={(e) =>
                              exceptThisSymbols.includes(e.key) &&
                              e.preventDefault()
                            }
                            onChange={(e) => {
                              handleValueChange("altMobile", e.target.value);
                            }}
                          />
                        </FormControl>
                      </Box>
                      <FormControl required fullWidth>
                        <FormLabel>No.of Travelers</FormLabel>
                        <TextField
                          required
                          variant="outlined"
                          type="number"
                          name="noOfTravel"
                          value={reqACall.noOfTravel}
                          onWheel={(e) => {
                            e.preventDefault();
                            e.target.blur();
                          }}
                          onKeyDown={(e) =>
                            exceptThisSymbols.includes(e.key) &&
                            e.preventDefault()
                          }
                          onChange={(e) => {
                            handleValueChange("noOfTravel", e.target.value);
                          }}
                        />
                      </FormControl>
                      <Box
                        display={"flex"}
                        gap="20px"
                        width="100%"
                        justifyContent={"center"}
                      >
                        <FormControl required fullWidth>
                          <FormLabel>Vehicle Type</FormLabel>
                          <Select
                            variant="outlined"
                            required
                            name="vehicle"
                            value={reqACall.vehicle}
                            onChange={(e) => {
                              handleValueChange("vehicle", e.target.value);
                            }}
                          >
                            {vehicleType.map((i, ind) => {
                              return (
                                <MenuItem key={ind} value={i}>
                                  {i}
                                </MenuItem>
                              );
                            })}
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
                              required
                              name="travelDate"
                              value={reqACall.travelDate}
                              format="DD-MM-YYYY"
                              // onChange={(e) => {
                              //   handleValueChange("travelDate", e.target.value);
                              // }}
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
                        <TextField
                          multiline
                          onChange={(e) => {
                            handleValueChange("desc", e.target.value);
                          }}
                          variant="outlined"
                          name="desc"
                          value={reqACall.desc}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="learnmore-btn"
                      >
                        Submit
                      </Button>
                    </form>
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
                        startIcon={<WhatsAppIcon />}
                      >
                        WhatsApp
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* ==------- -------------------*****---------------------------*/}
              {/* ittineration */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  alignItems: "flex-start",
                  width: isMobile || isDeviceDown ? "100%" : "100%",
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
                  Itinerary
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
                  Get ready for an exciting adventure! Our one-day trip
                  itinerary in Trivandrum is designed to immerse you in the
                  city&apos;s vibrant culture, rich heritage, and breathtaking
                  scenery. From exploring ancient temples to savoring delicious
                  local cuisine, each moment promises to be unforgettable. Join
                  us as we embark on a day filled with discovery and exploration
                  in this captivating city.
                </Typography>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  gap="20px"
                  height={"100%"}
                  width="100%"
                >
                  {itineraryTemple.map((i, ind) => {
                    return (
                      <>
                        <Accordion
                          expanded={expanded === `panel${ind}`}
                          onChange={handleChange(`panel${ind}`)}
                        >
                          <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: "Poppins-SemiBold",
                                color: THEMEColor.PRIMARY,
                              }}
                            >
                              Place #{ind + 1} - {i.title}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box
                              // bgcolor={THEMEColor.PRIMARY}
                              height={"100%"}
                              width="100%"
                              display={"flex"}
                              flexDirection={"column"}
                              gap="20px"
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: "Poppins-Medium",
                                  color: THEMEColor.buttons,
                                  // textAlign: "center",
                                  // lineHeight: "20px",
                                }}
                              >
                                {i.heading}
                              </Typography>
                              <Box
                                height={"100%"}
                                width={
                                  isMobile || isDeviceDown ? "100%" : "80%"
                                }
                              >
                                <img
                                  src={i.image}
                                  height={"100%"}
                                  width={"100%"}
                                />
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "15px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <Typography
                                  variant={
                                    isMobile || isDeviceDown ? "h6" : "h5"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // width: "80%",
                                  }}
                                  // className="oneday-heading"
                                >
                                  Introduction
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
                                  {i.introduction}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "15px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <Typography
                                  variant={
                                    isMobile || isDeviceDown ? "h6" : "h5"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // width: "80%",
                                  }}
                                  // className="oneday-heading"
                                >
                                  History
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
                                  {i.history}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "15px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <Typography
                                  variant={
                                    isMobile || isDeviceDown ? "h6" : "h5"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // width: "80%",
                                  }}
                                  // className="oneday-heading"
                                >
                                  Visiting {i.title}
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
                                  <ul>
                                    <li>Timing-{i.Visiting.timing}</li>
                                    <li>
                                      {ind === 0 || ind === 1 || ind === 8
                                        ? `Dress Code-${i.Visiting.dressCode}`
                                        : `Entry Fee-${i.Visiting.entryFee}`}
                                    </li>
                                    <li>
                                      {ind === 2 ||
                                      ind === 3 ||
                                      ind === 4 ||
                                      ind === 5
                                        ? `Tour Guide-${i.Visiting.tourGuide}`
                                        : `Photography-${i.Visiting.photography}`}
                                    </li>
                                  </ul>
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "15px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <Typography
                                  variant={
                                    isMobile || isDeviceDown ? "h6" : "h5"
                                  }
                                  sx={{
                                    fontFamily: "Poppins-Bold",
                                    color: THEMEColor.buttons,
                                    textAlign: "center",
                                    // width: "80%",
                                  }}
                                  // className="oneday-heading"
                                >
                                  Plan your visit
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
                                  {i.planVisit.content}
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
                                  <b>Address</b>-{i.planVisit.address}
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
                                  {i.conclude}
                                </Typography>
                              </Box>
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      </>
                    );
                  })}
                </Box>
              </Box>
              {/* ------- */}
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default OneDayTrip;
