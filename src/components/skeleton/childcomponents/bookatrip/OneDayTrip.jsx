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
  Alert,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Call as CallIcon,
  WhatsApp as WhatsAppIcon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  Looks3 as Looks3Icon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { THEMEColor } from "../../../../assets/THEMES";
import { styled, useTheme } from "@mui/material/styles";
import "../../../../styles/OneDayTrip.css";
import oneDay from "../../../../assets/images/places/oneday.jpg";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  itineraryTemple,
  towardsKanyakumari,
  towardsPilgrimage,
  towardsVarkala,
} from "./OnedayTripData";
import moment from "moment";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import emailjs from "@emailjs/browser";
import kanyakumari from "../../../../assets/images/oneday/kanyakumari/kanyakumari.jpg";
import varkala from "../../../../assets/images/oneday/varkala/varkala.jpg";
import pilgrimage from "../../../../assets/images/oneday/pilgrimage/pilgrimage.jpg";
import padma3 from "../../../../assets/images/oneday/kanyakumari/padmana/padmana3.jpg";
import { ROUTEPATH } from "../../../ROUTEPATH";
import AlertSnack from "../separate/AlertSnack";

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
  const towardsKanyakumariScroll = useRef(null);
  const towardsVarkalaScroll = useRef(null);
  const towardsPilgrimageiScroll = useRef(null);
  const handleTowardsScroll = (scrollToName) => {
    scrollToName.current.scrollIntoView({ behavior: "smooth" });
  };
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
    direction: "",
  });
  const towardsDirections = [
    {
      name: "Towards Kanyakumari",
      icon: <LooksOneIcon sx={{ color: THEMEColor.Secondary }} />,
      scroll: towardsKanyakumariScroll,
    },
    {
      name: "Towards Varkala",
      icon: <LooksTwoIcon sx={{ color: THEMEColor.Secondary }} />,
      scroll: towardsVarkalaScroll,
    },
    {
      name: "Pilgrimage one day",
      icon: <Looks3Icon sx={{ color: THEMEColor.Secondary }} />,
      scroll: towardsPilgrimageiScroll,
    },
  ];
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
  const form = useRef();
  const [openAlert, setOpenAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const travel = { ...reqACall.travelDate };

    const travelDateD = moment(travel);
    const formattedData = travelDateD.format("DD-MM-YYYY");
    console.log("daata", reqACall, formattedData);
    const serviceID = "service_n2nymz7";

    const templateID = "template_d9f10qw";
    const publickey = "jJhGOvecr6Fg00Xcl";
    const sendData = {
      name: reqACall.name,
      email: reqACall.email,
      mobile: reqACall.mobile,
      altMobile: reqACall.altMobile,
      noOfTravel: reqACall.noOfTravel,
      vehicle: reqACall.vehicle,
      travelDate: formattedData,
      desc: reqACall.desc,
      direction: reqACall.direction,
    };
    try {
      emailjs.send(serviceID, templateID, sendData, publickey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setOpenAlert(true);
      setReqACall({
        ...reqACall,
        name: "",
        email: "",
        mobile: "",
        altMobile: "",
        noOfTravel: "",
        vehicle: "",
        travelDate: moment(),
        desc: "",
        direction: "",
      });
      setTimeout(() => {
        setOpenAlert(false)
      }, 3500);
    } catch (err) {
      console.log("error", err);
    }
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
          className="scroll-to-top-button1"
          onClick={handleReqCallBackIntoView}
        >
          Check Availability
        </button>
      )}
      <div
        style={{
          marginTop: isDevice
            ? "9px"
            : isMobile || isDeviceDown
            ? "-33.3px"
            : "-28px",
          height: "100%",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",justifyContent:"space-between"
        }}
      >
        <Box
          sx={{
            backgroundImage: `url("${padma3}")`,
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
              background: " rgba(0,0,0, 0.5)",
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
                    <span className="highlight-text">
                      <a
                        onClick={() => navigate(ROUTEPATH.MAIN)}
                        style={{
                          fontSize: isMobile || isDeviceDown ? "25px" : "40px",
                        }}
                      >
                        Trivandrum Trip Maker
                      </a>
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
                    ref={reqCallBackRef}
                  >
                    Request a CallBack
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width="100%"
                  height={"100%"}
                >
                  <form
                    ref={form}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onSubmit={handleSubmit}
                  >
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
                      <Box
                        display={"flex"}
                        flexDirection={
                          isMobile || isDeviceDown ? "column" : "row"
                        }
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
                        flexDirection={
                          isMobile || isDeviceDown ? "column" : "row"
                        }
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
                      </Box>{" "}
                      <FormControl required fullWidth>
                        <FormLabel>Select Direction</FormLabel>
                        <Select
                          variant="outlined"
                          required
                          name="direction"
                          value={reqACall.direction}
                          onChange={(e) => {
                            handleValueChange("direction", e.target.value);
                          }}
                        >
                          {towardsDirections.map((i, ind) => {
                            return (
                              <MenuItem key={ind} value={i.name}>
                                {i.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
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
                              onChange={(e) => {
                                setReqACall({ ...reqACall, travelDate: e });
                              }}
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
                        flexDirection={"column"}
                      >
                        <Box
                          display={"flex"}
                          gap="20px"
                          width="100%"
                          justifyContent={"center"}
                          flexDirection={
                            isMobile || isDeviceDown ? "column" : "row"
                          }
                        >
                          <a href="tel:+918086040400" style={{ width: "100%" }}>
                            {" "}
                            <Button
                              variant="contained"
                              className="learnmore-btn"
                              fullWidth
                              startIcon={<CallIcon />}
                            >
                              +918086040400
                            </Button>
                          </a>
                          <a href="tel:+918547676840" style={{ width: "100%" }}>
                            {" "}
                            <Button
                              variant="contained"
                              className="learnmore-btn"
                              fullWidth
                              startIcon={<CallIcon />}
                            >
                              +918547676840
                            </Button>
                          </a>
                        </Box>{" "}
                        <a
                          href="https://wa.me/message/5QKJSYVWLPELD1"
                          target="_blank"
                          rel="noreferrer"
                          style={{ width: "100%" }}
                        >
                          <Button
                            variant="contained"
                            className="learnmore-btn"
                            fullWidth
                            startIcon={<WhatsAppIcon />}
                          >
                            WhatsApp
                          </Button>
                        </a>
                      </Box>
                    </Box>
                  </form>
                </Box>
                {openAlert ? (
                         <AlertSnack  openAlert={openAlert} setOpenAlert={setOpenAlert} />
                        ) : null}
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
                  Three Unique Starting Points for Your Journey
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
                  In our Trivandrum trip planning website, travelers have the
                  flexibility to commence their journey from one of three
                  distinct starting points.
                </Typography>
                <Box>
                  <List>
                    {towardsDirections.map((i, index) => {
                      return (
                        <ListItem
                          key={index}
                          onClick={() => handleTowardsScroll(i.scroll)}
                        >
                          <ListItemButton>
                            <ListItemIcon>{i.icon}</ListItemIcon>
                            <ListItemText>
                              <p style={{ fontFamily: "Poppins-SemiBold" }}>
                                {i.name}
                              </p>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <Box
                    ref={towardsKanyakumariScroll}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {" "}
                    <Grid container spacing={5}>
                      <Grid item md={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "20px",
                          }}
                        >
                          {" "}
                          <Box
                            sx={{
                              display: "flex",
                              height: "100%",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant={isMobile || isDeviceDown ? "h6" : "h4"}
                              sx={{
                                fontFamily: "Poppins-Bold",
                                color: THEMEColor.buttons,
                                textAlign: "center",
                                // width: "80%",
                              }}
                              className="oneday-heading1"
                            >
                              Towards Kanyakumari
                            </Typography>
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            Setting your course towards Kanyakumari, the first
                            of three exciting starting directions on our
                            Trivandrum trip planner, promises breathtaking
                            coastal vistas, cultural landmarks, and memorable
                            experiences along the way. Explore the beauty and
                            charm of the southernmost tip of India as you embark
                            on an unforgettable journey.
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            {" "}
                            will take you on a remarkable journey through a
                            multitude of captivating locations. Explore the
                            divine beauty of the Padmanabha Swamy Temple, bask
                            in the spiritual aura of Attukal Bhagavathi Temple,
                            and unwind at the scenic Kovalam Beach. Along the
                            way, you can marvel at the impressive Azhimala Shiva
                            Statue and delve into the rich history of the
                            Padmanabhapuram Palace, just to name a few of the
                            many enchanting stops that await you on this
                            unforgettable route.
                          </Typography>
                        </Box>
                      </Grid>{" "}
                      <Grid item md={12}>
                        <Box
                          sx={{
                            height:
                              isMobile || isDeviceDown ? "300px" : "600px",
                            width: "100%",
                          }}
                        >
                          <img
                            src={kanyakumari}
                            height={"100%"}
                            width={"100%"}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      gap="20px"
                      height={"100%"}
                      width="100%"
                    >
                      {towardsKanyakumari.map((i, ind) => {
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
                                    sx={{
                                      height:
                                        isMobile || isDeviceDown
                                          ? "300px"
                                          : "600px",
                                      width: "100%",
                                    }}
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
                                    {ind === 3 || ind === 4 || ind === 6 ? (
                                      <>
                                        <Typography
                                          variant={
                                            isMobile || isDeviceDown
                                              ? "h6"
                                              : "h5"
                                          }
                                          sx={{
                                            fontFamily: "Poppins-Bold",
                                            color: THEMEColor.buttons,
                                            textAlign: "center",
                                            // width: "80%",
                                          }}
                                          // className="oneday-heading"
                                        >
                                          {ind === 3
                                            ? "Backwater Cruises"
                                            : "The Statue"}
                                        </Typography>
                                        <Box
                                          sx={{
                                            fontFamily: "Poppins-Medium",
                                            color: THEMEColor.buttons,
                                            // textAlign: "center",
                                            // lineHeight: "20px",
                                          }}
                                        >
                                          <ul className="list-space">
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 3
                                                  ? ` Houseboat Cruises (Scenic
                                                Backwater Tours)`
                                                  : ind === 6
                                                  ? `Towering Statue(Grand Monument)`
                                                  : `Majestic Sculpture`}
                                              </span>
                                              -{i.backwaterCruises.house}
                                            </li>
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 3
                                                  ? `Avian Paradise (Bird watching)`
                                                  : ind === 6
                                                  ? `Homage to Thiruvalluvar(Literary Significance)`
                                                  : "Pilgrimage Site"}
                                              </span>
                                              -{i.backwaterCruises.avian}
                                            </li>
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 3
                                                  ? `Mangrove Safari (Mangrove
                                                Forest)`
                                                  : ind === 6
                                                  ? `Cultural Bridge(Literary Significance)`
                                                  : "Rituals and Offerings"}
                                              </span>
                                              -{i.backwaterCruises.avian}
                                            </li>
                                          </ul>
                                        </Box>
                                      </>
                                    ) : (
                                      <>
                                        {" "}
                                        <Typography
                                          variant={
                                            isMobile || isDeviceDown
                                              ? "h6"
                                              : "h5"
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
                                      </>
                                    )}
                                  </Box>
                                  {ind === 5 || ind === 7 ? (
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
                                        {i.title} Highlights
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
                                        <ul className="list-space">
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 7
                                                ? `Mahatma Gandhi Statue(Central Statue)`
                                                : "Mantrasala"}
                                            </span>
                                            -{i.highlights.mantrasala}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 7
                                                ? `Mahatma's Life in Panels(Memorial Wall)`
                                                : " Amma Vilasom"}
                                            </span>
                                            -{i.highlights.ammaVilasom}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 7
                                                ? `A Place of Reflection(Meditation Hall)`
                                                : "Kottaram"}
                                            </span>
                                            -{i.highlights.kottaram}
                                          </li>
                                          {ind === 7 ? null : (
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                Nataksala
                                              </span>
                                              -{i.highlights.nataksala}
                                            </li>
                                          )}
                                        </ul>
                                      </Typography>
                                    </Box>
                                  ) : null}

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
                                      <ul className="list-space">
                                        <li>
                                          <span
                                            style={{
                                              fontFamily: "Poppins-Bold",
                                            }}
                                          >
                                            {ind === 2 ? "Swimming" : "Timing"}
                                          </span>
                                          -{i.Visiting.timing}
                                        </li>
                                        <li>
                                          {ind === 2 ? (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                Surfing
                                              </span>
                                              -{i.Visiting.dressCode}
                                            </>
                                          ) : ind === 0 ||
                                            ind === 1 ||
                                            ind === 8 ||
                                            ind === 9 ||
                                            ind === 10 ? (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                Dress Code
                                              </span>
                                              -
                                              {ind === 4
                                                ? i.Visiting.entryFee
                                                : i.Visiting.dressCode}
                                            </>
                                          ) : (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 3
                                                  ? "Packages"
                                                  : "Entry Fee"}
                                              </span>
                                              -{i.Visiting.entryFee}
                                            </>
                                          )}
                                        </li>
                                        <li>
                                          {ind === 2 ? (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                Parasailing
                                              </span>
                                              -{i.Visiting.photography}
                                            </>
                                          ) : ind === 3 || ind === 6 ? (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 3
                                                  ? "Eco-friendly Practices"
                                                  : "Tour Guide"}
                                              </span>
                                              -{i.Visiting.tourGuide}
                                            </>
                                          ) : (
                                            <>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                Photography
                                              </span>
                                              -
                                              {ind === 4
                                                ? i.Visiting.tourGuide
                                                : i.Visiting.photography}
                                            </>
                                          )}
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
                                      <span
                                        style={{ fontFamily: "Poppins-Bold" }}
                                      >
                                        Address
                                      </span>
                                      -{i.planVisit.address}
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
                  <Box
                    ref={towardsVarkalaScroll}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {" "}
                    <Grid container spacing={5}>
                      <Grid item md={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "20px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              height: "100%",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant={isMobile || isDeviceDown ? "h6" : "h4"}
                              sx={{
                                fontFamily: "Poppins-Bold",
                                color: THEMEColor.buttons,
                                textAlign: "center",
                                // width: "80%",
                              }}
                              className="oneday-heading1"
                            >
                              Towards Varkala
                            </Typography>
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            Opting for the second direction, &apos;Towards
                            Varkala,&apos; through our Trivandrum trip planner
                            promises an enriching journey through an array of
                            captivating locales. Immerse yourself in the
                            serenity of the Ganapathi Temple, where spirituality
                            meets tranquility. Experience the wonders of
                            wildlife at Trivandrum Zoo, delve into history and
                            culture at the Napier Museum, and step back in time
                            at the regal Kuthira Malika.
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            Along the way, revel in the peaceful shores of
                            Kappil Beach, with each destination offering a
                            unique and enriching experience. This route is a
                            delightful blend of history, nature, and culture,
                            providing travelers with a diverse range of
                            attractions. The &apos;Towards Varkala&apos;
                            direction will undoubtedly leave you with
                            unforgettable memories, thanks to the myriad of
                            enchanting stops that await you along the way.
                          </Typography>
                        </Box>
                      </Grid>{" "}
                      <Grid item md={12}>
                        <Box
                          sx={{
                            height:
                              isMobile || isDeviceDown ? "300px" : "600px",
                            width: "100%",
                          }}
                        >
                          <img src={varkala} height={"100%"} width={"100%"} />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      gap="20px"
                      height={"100%"}
                      width="100%"
                    >
                      {towardsVarkala.map((i, ind) => {
                        return (
                          <>
                            <Accordion
                              expanded={expanded === `panel${ind + 30}`}
                              onChange={handleChange(`panel${ind + 30}`)}
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
                                    sx={{
                                      height:
                                        isMobile || isDeviceDown
                                          ? "300px"
                                          : "600px",
                                      width: "100%",
                                    }}
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
                                    {ind === 1 ? (
                                      <>
                                        <Typography
                                          variant={
                                            isMobile || isDeviceDown
                                              ? "h6"
                                              : "h5"
                                          }
                                          sx={{
                                            fontFamily: "Poppins-Bold",
                                            color: THEMEColor.buttons,
                                            textAlign: "center",
                                            // width: "80%",
                                          }}
                                          // className="oneday-heading"
                                        >
                                          {ind === 1
                                            ? "Wildlife Collection"
                                            : ""}
                                        </Typography>
                                        <Box
                                          sx={{
                                            fontFamily: "Poppins-Medium",
                                            color: THEMEColor.buttons,
                                            // textAlign: "center",
                                            // lineHeight: "20px",
                                          }}
                                        >
                                          <ul className="list-space">
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 1
                                                  ? `Majestic Big Cats(Lions and Tigers)`
                                                  : ``}
                                              </span>
                                              -{i.wildllife.majestic}
                                            </li>
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 1
                                                  ? `Gentle Giants(Elephants)`
                                                  : ""}
                                              </span>
                                              -{i.wildllife.gentle}
                                            </li>
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 1
                                                  ? `Slithering Wonders(Reptiles)`
                                                  : ""}
                                              </span>
                                              -{i.wildllife.reptile}
                                            </li>
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 1
                                                  ? `Feathered Friends(Aviary)`
                                                  : ""}
                                              </span>
                                              -{i.wildllife.aviary}
                                            </li>
                                          </ul>
                                        </Box>
                                      </>
                                    ) : (
                                      <>
                                        {" "}
                                        <Typography
                                          variant={
                                            isMobile || isDeviceDown
                                              ? "h6"
                                              : "h5"
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
                                      </>
                                    )}
                                  </Box>
                                  {ind === 3 ||
                                  ind === 4 ||
                                  ind === 5 ||
                                  ind === 6 ||
                                  ind === 7 ||
                                  ind === 8 ? (
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
                                        {i.title} Highlights
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
                                        <ul className="list-space">
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 3
                                                ? `Regal Artifacts(Royal Collection)`
                                                : ind === 5
                                                ? `Seashell Treasures(Beachcombing)`
                                                : ind === 6 || ind === 8
                                                ? `Relaxation by the Sea(Sunbathing)`
                                                : ind === 7
                                                ? `Historic Graves(Cemetery)`
                                                : `Hiking Trails(Jatayu Nature Park)`}
                                            </span>
                                            -
                                            {ind === 3
                                              ? i.highlights.regal
                                              : i.activity.hiking}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 3
                                                ? `Musical Legacy(Swathi Sangeethotsavam)`
                                                : ind === 5
                                                ? `Capture the Serenity(Photography)`
                                                : ind === 6 || ind === 8
                                                ? `Refreshing Waters(Swimming)`
                                                : ind === 7
                                                ? `Colonial Legacy(Chapel)`
                                                : `Zip Lining(Jatayu Nature Park)`}
                                            </span>
                                            -
                                            {ind === 3
                                              ? i.highlights.music
                                              : i.activity.zip}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 3
                                                ? `Tranquil Retreat(Exquisite Courtyards)`
                                                : ind === 5
                                                ? `Refreshing Waters(Swimming)`
                                                : ind === 6 || ind === 8
                                                ? `Catch the Waves(Surfing)`
                                                : ind === 7
                                                ? `Panoramic Views(Lighthouse)`
                                                : `Rock Climbing(Jatayu Adventure Center)`}
                                            </span>
                                            -
                                            {ind === 3
                                              ? i.highlights.tranq
                                              : i.activity.rock}
                                          </li>
                                          {ind === 4 ||
                                          ind === 5 ||
                                          ind === 6 ||
                                          ind === 7 ? (
                                            <li>
                                              <span
                                                style={{
                                                  fontFamily: "Poppins-Bold",
                                                }}
                                              >
                                                {ind === 4
                                                  ? ` Rappelling(Jatayu Adventure
                                                Center)`
                                                  : ind === 6
                                                  ? `Holistic Wellness(Ayurvedic Treatments)`
                                                  : ind === 7
                                                  ? `Militaristic Past(Cannon Battery)`
                                                  : ind === 8
                                                  ? `Mesmerizing Evenings(Sunset Views)`
                                                  : `Backwater Cruises(Boat Rides)`}
                                              </span>
                                              -{i.activity.rappeling}
                                            </li>
                                          ) : null}
                                        </ul>
                                      </Typography>
                                    </Box>
                                  ) : null}

                                  {ind === 5 || ind === 6 ? null : (
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
                                        <ul className="list-space">
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {"Timing"}
                                            </span>
                                            -{i.Visiting.timing}
                                          </li>
                                          <li>
                                            {ind === 0 ? (
                                              <>
                                                <span
                                                  style={{
                                                    fontFamily: "Poppins-Bold",
                                                  }}
                                                >
                                                  Dress Code
                                                </span>
                                                -{i.Visiting.dressCode}
                                              </>
                                            ) : (
                                              <>
                                                <span
                                                  style={{
                                                    fontFamily: "Poppins-Bold",
                                                  }}
                                                >
                                                  {"Entry Fee"}
                                                </span>
                                                -{i.Visiting.entryFee}
                                              </>
                                            )}
                                          </li>
                                          <li>
                                            {ind === 2 ? (
                                              <>
                                                <span
                                                  style={{
                                                    fontFamily: "Poppins-Bold",
                                                  }}
                                                >
                                                  {"Tour Guide"}
                                                </span>
                                                -{i.Visiting.tourGuide}
                                              </>
                                            ) : (
                                              <>
                                                <span
                                                  style={{
                                                    fontFamily: "Poppins-Bold",
                                                  }}
                                                >
                                                  {ind === 4
                                                    ? "Safety Guidelines"
                                                    : "Photography"}
                                                </span>
                                                -{i.Visiting.photography}
                                              </>
                                            )}
                                          </li>
                                        </ul>
                                      </Typography>
                                    </Box>
                                  )}
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
                                      <span
                                        style={{ fontFamily: "Poppins-Bold" }}
                                      >
                                        Address
                                      </span>
                                      -{i.planVisit.address}
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
                  <Box
                    ref={towardsPilgrimageiScroll}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {" "}
                    <Grid container spacing={5}>
                      <Grid item md={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "20px",
                          }}
                        >
                          {" "}
                          <Box
                            sx={{
                              display: "flex",
                              height: "100%",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant={isMobile || isDeviceDown ? "h6" : "h4"}
                              sx={{
                                fontFamily: "Poppins-Bold",
                                color: THEMEColor.buttons,
                                textAlign: "center",
                                // width: "80%",
                              }}
                              className="oneday-heading1"
                            >
                              Pilgrimage Oneday trip
                            </Typography>
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            Embark on a spiritual odyssey with our
                            &apos;Pilgrimage Oneday Trip&apos; direction,
                            thoughtfully crafted in our Trivandrum trip planner.
                            This sacred journey unfolds with a visit to the
                            renowned Padmanabha Swamy Temple, where history and
                            spirituality blend seamlessly. The Ganapathy Temple
                            offers a serene haven for seekers, and the
                            Thiruvallam Parasurama Temple adds a touch of divine
                            grace to your experience. En route, you&apos;ll also
                            encounter the majestic Azhimala Shiva Statue and the
                            Thirupathi Temple in Kanyakumari, where centuries of
                            tradition and faith converge. Finally, your
                            pilgrimage culminates at the enchanting Suchindram
                            Temple, a testament to the rich tapestry of
                            spiritual heritage in this region.
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Medium",
                              color: THEMEColor.buttons,
                              // textAlign: "center",
                              // lineHeight: "20px",
                            }}
                          >
                            Your spiritual quest continues as you delve deeper
                            into the &apos;Pilgrimage Oneday Trip.&apos; Each
                            destination along this path holds a unique
                            significance, offering insights into the rich
                            spiritual and cultural heritage of the region. With
                            each visit, you&apos;ll connect with the profound
                            history and devotion that define these sacred sites.
                            This direction not only promises a deep sense of
                            fulfillment but also provides a comprehensive
                            understanding of the diverse religious traditions
                            that thrive in Trivandrum and its surroundings,
                            making it a truly enriching journey for the soul.
                          </Typography>
                        </Box>
                      </Grid>{" "}
                      <Grid item md={12}>
                        <Box
                          sx={{
                            height:
                              isMobile || isDeviceDown ? "300px" : "600px",
                            width: "100%",
                          }}
                        >
                          <img
                            src={pilgrimage}
                            height={"100%"}
                            width={"100%"}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      gap="20px"
                      height={"100%"}
                      width="100%"
                    >
                      {towardsPilgrimage.map((i, ind) => {
                        return (
                          <>
                            <Accordion
                              expanded={expanded === `panel${ind + 20}`}
                              onChange={handleChange(`panel${ind + 20}`)}
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
                                    sx={{
                                      height:
                                        isMobile || isDeviceDown
                                          ? "300px"
                                          : "600px",
                                      width: "100%",
                                    }}
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
                                  {ind === 3 ? null : (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        alignItems: "flex-start",
                                      }}
                                    >
                                      <>
                                        {" "}
                                        <Typography
                                          variant={
                                            isMobile || isDeviceDown
                                              ? "h6"
                                              : "h5"
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
                                      </>
                                    </Box>
                                  )}
                                  {ind === 2 ||
                                  ind === 3 ||
                                  ind === 4 ||
                                  ind === 7 ? (
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
                                        {i.title} Highlights
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
                                        <ul className="list-space">
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 2
                                                ? `Aaraattu Festival`
                                                : ind === 3
                                                ? `Majestic Sculpture`
                                                : ind === 4
                                                ? `Architecture`
                                                : ind === 7
                                                ? `Goddess Bhadrakali`
                                                : ``}
                                            </span>
                                            -{i.highlights.one}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 2
                                                ? `Navaratri Festival`
                                                : ind === 3
                                                ? `Pilgrimage`
                                                : ind === 4
                                                ? `Deity`
                                                : ind === 7
                                                ? `Festivals`
                                                : " Amma Vilasom"}
                                            </span>
                                            -{i.highlights.two}
                                          </li>
                                          <li>
                                            <span
                                              style={{
                                                fontFamily: "Poppins-Bold",
                                              }}
                                            >
                                              {ind === 2
                                                ? `Vishu`
                                                : ind === 3
                                                ? `Rituals and Offerings`
                                                : ind === 4
                                                ? `Festivals`
                                                : ind === 7
                                                ? `Artistic Significance`
                                                : "Kottaram"}
                                            </span>
                                            -{i.highlights.three}
                                          </li>
                                        </ul>
                                      </Typography>
                                    </Box>
                                  ) : null}

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
                                      <ul className="list-space">
                                        <li>
                                          <span
                                            style={{
                                              fontFamily: "Poppins-Bold",
                                            }}
                                          >
                                            Timing
                                          </span>
                                          -{i.Visiting.timing}
                                        </li>
                                        <li>
                                          <span
                                            style={{
                                              fontFamily: "Poppins-Bold",
                                            }}
                                          >
                                            {ind === 3
                                              ? `Entry Fee`
                                              : `Dress Code`}
                                          </span>
                                          -
                                          {ind === 3
                                            ? i.Visiting.entryFee
                                            : i.Visiting.dressCode}
                                        </li>
                                        <li>
                                          <span
                                            style={{
                                              fontFamily: "Poppins-Bold",
                                            }}
                                          >
                                            {ind === 3
                                              ? `Tour Guide`
                                              : "Photography"}
                                          </span>
                                          -
                                          {ind === 3
                                            ? i.Visiting.tourGuide
                                            : i.Visiting.photography}
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
                                      <span
                                        style={{ fontFamily: "Poppins-Bold" }}
                                      >
                                        Address
                                      </span>
                                      -{i.planVisit.address}
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
