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
import oneDay from "../../../../assets/images/airports/trivandrumairport.jpg";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { itineraryTemple } from "./OnedayTripData";
import moment from "moment";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import emailjs from "@emailjs/browser";
import { cards } from "../../../../assets/rides";
import { airportData } from "./airportData";
import airportImg from "../../../../assets/images/airports/trivandrumairport.jpg";
import { ROUTEPATH } from "../../../ROUTEPATH";
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
function AirportPickupDrop() {
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
  const [travelTime, setTravelTime] = useState(null);
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
    flightNo: "",
    pick: "",
    drop: "",
    dateTime: moment(),
    air: "",
  });
  const CustomTimeFormatter = (time) => {
    return moment(time).format("hh:mm a");
  };
  const exceptThisSymbols = ["e", "E", "+", "-", ".", "ArrowUp", "ArrowDown"];
  const vehicleType = ["4-Seater", "7-Seater", "12-Seater", "other"];
  const airportType = [
    "Cochin Airport",
    "Calicut Airport",
    "Kannur Airport",
    "Trivandrum Airport",
  ];
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

  const form = useRef();
  const [openAlert, setOpenAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const travel = { ...reqACall.travelDate };

    const travelDateD = moment(travel);
    const formattedData = travelDateD.format("DD-MM-YYYY");
    const travel2 = { ...reqACall.dateTime };

    const travelDateD2 = moment(travel2);
    const formattedData2 = travelDateD2.format("LT");
    console.log("ssdad", formattedData, formattedData2);
    const serviceID = "service_celisxe";
    const templateID = "template_gsl388e";
    const publickey = "Qs6eeqo7LGb5omh09";
    const sendData = {
      name: reqACall.name,
      email: reqACall.email,
      mobile: reqACall.mobile,
      altMobile: reqACall.altMobile,
      noOfTravel: reqACall.noOfTravel,
      vehicle: reqACall.vehicle,
      travelDate: formattedData,
      desc: reqACall.desc,
      flightNo: reqACall.flightNo,
      pick: reqACall.pick,
      drop: reqACall.drop,
      dateTime: formattedData2,
      air: reqACall.air,
    };
    console.log("airport", reqACall);
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
        noOfTravel: null,
        vehicle: "",
        travelDate: moment(),
        desc: "",
        flightNo: "",
        pick: "",
        drop: "",
        dateTime: moment(),
        air: "",
      });
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
          className="scroll-to-top-button"
          onClick={handleReqCallBackIntoView}
        >
          Check
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
            backgroundImage: `url("${airportImg}")`,
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
                    variant="h5"
                    className="about-company"
                    sx={{
                      textAlign: isMobile || isDeviceDown ? "center" : "",
                    }}
                  >
                    <span></span>Airport Pickup&Drop
                  </Typography>
                  <Typography
                    variant={isMobile || isDeviceDown ? "h5" : "h4"}
                    sx={{
                      fontFamily:
                        isMobile || isDeviceDown
                          ? "Poppins-Medium"
                          : "Poppins-SemiBold",
                      color: THEMEColor.PRIMARY,
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Seamless Airport Transfers in Trivandrum, Kerala
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
                  Introduction
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily:
                      isMobile || isDeviceDown
                        ? "Poppins-Light"
                        : "Poppins-Medium",
                    color: THEMEColor.buttons,
                    // textAlign: "center",
                    // lineHeight: "20px",
                  }}
                >
                  Welcome to your gateway to hassle-free travel in Trivandrum,
                  the heart of Kerala! At{" "}
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.MAIN)}>
                      TrivandrumTripMaker.com
                    </a>
                  </span>
                  , we understand that a smooth arrival and departure experience
                  is essential for making your visit memorable. That&apos;s why
                  we offer top-notch airport pickup and drop-off services
                  tailored to your needs. Whether you&apos;re arriving in
                  Trivandrum for an exciting adventure or bidding farewell to
                  this beautiful city, our dedicated team is here to ensure your
                  journey begins and ends with comfort and convenience. To make
                  your trip stress-free, we&apos;ve designed a simple booking
                  process that allows you to provide us with all the necessary
                  details, so you can focus on enjoying your stay.
                </Typography>
              </Box>
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
                    Book a Trip
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
                        gap="20px"
                        width="100%"
                        justifyContent={"center"}
                        flexDirection={
                          isMobile || isDeviceDown ? "column" : "row"
                        }
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
                      </Box>
                      <fieldset style={{ borderRadius: "10px", width: "100%" }}>
                        <legend>Flight Details</legend>
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
                            <FormLabel>Select Airport</FormLabel>
                            <Select
                              variant="outlined"
                              required
                              name="air"
                              value={reqACall.air}
                              onChange={(e) => {
                                handleValueChange("air", e.target.value);
                              }}
                            >
                              {airportType.map((i, ind) => {
                                return (
                                  <MenuItem key={ind} value={i}>
                                    {i}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                          <FormControl required fullWidth>
                            <FormLabel>Flight No.</FormLabel>
                            <TextField
                              required
                              variant="outlined"
                              // type="number"
                              name="flightNo"
                              value={reqACall.flightNo}
                              // onWheel={(e) => {
                              //   e.preventDefault();
                              //   e.target.blur();
                              // }}
                              // onKeyDown={(e) =>
                              //   exceptThisSymbols.includes(e.key) &&
                              //   e.preventDefault()
                              // }
                              onChange={(e) => {
                                handleValueChange("flightNo", e.target.value);
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
                            <FormLabel>Travel Date</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                              <DatePicker
                                required
                                name="travelDate"
                                value={reqACall.travelDate}
                                format="DD-MM-YYYY"
                                disablePast
                                onChange={(e) => {
                                  console.log("date", e.toLocaleString());
                                  setReqACall({ ...reqACall, travelDate: e });
                                }}
                              />
                            </LocalizationProvider>
                          </FormControl>
                          <FormControl required fullWidth>
                            <FormLabel>Time</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                              <TimePicker
                                required
                                name="dateTime"
                                value={reqACall.dateTime}
                                format={"hh:mm a"}
                                onChange={(e) => {
                                  setReqACall({ ...reqACall, dateTime: e });
                                }}
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
                      </fieldset>
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
                          <FormLabel>Pickup Location</FormLabel>
                          <TextField
                            required
                            variant="outlined"
                            // type="number"
                            name="pick"
                            value={reqACall.pick}
                            onWheel={(e) => {
                              e.preventDefault();
                              e.target.blur();
                            }}
                            // onKeyDown={(e) =>
                            //   exceptThisSymbols.includes(e.key) &&
                            //   e.preventDefault()
                            // }
                            onChange={(e) => {
                              handleValueChange("pick", e.target.value);
                            }}
                          />
                        </FormControl>{" "}
                        <FormControl required fullWidth>
                          <FormLabel>Drop Location</FormLabel>
                          <TextField
                            required
                            variant="outlined"
                            // type="number"
                            name="drop"
                            value={reqACall.drop}
                            // onWheel={(e) => {
                            //   e.preventDefault();
                            //   e.target.blur();
                            // }}
                            // onKeyDown={(e) =>
                            //   exceptThisSymbols.includes(e.key) &&
                            //   e.preventDefault()
                            // }
                            onChange={(e) => {
                              handleValueChange("drop", e.target.value);
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
                        {" "}
                        <FormControl required fullWidth>
                          <FormLabel>No of Passengers</FormLabel>
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
                        <FormControl required fullWidth>
                          <FormLabel>Vehicle Type</FormLabel>
                          <Select
                            variant="outlined"
                            required
                            name="other"
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
                  <Alert
                    onClose={() => {
                      setOpenAlert(false);
                    }}
                  >
                    Thanks for submitting,We&apos;ll reach to you soon!
                  </Alert>
                ) : null}
              </Box>
            </Box>
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
                  Airports in Kerala
                </Typography>
              </Box>
              <Grid container>
                {airportData.map((i, index) => {
                  return (
                    <>
                      <Grid item md={6} sm={12} xs={12}>
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
                              width: isMobile || isDeviceDown ? "100%" : "75%",
                              border: "2px solid #3dae2b",
                              overflow: "hidden",
                              height: "540px",
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
                                src={i.img}
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
                                    isMobile || isDeviceDown
                                      ? "caption"
                                      : "body2"
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
                                  {i.content}
                                </Typography>
                              </Box>
                            </CardContent>
                          </div>
                        </Card>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </Box>{" "}
      </div>
    </>
  );
}

export default AirportPickupDrop;
