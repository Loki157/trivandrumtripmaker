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
  Alert,
  Stack,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  CallRounded as CallRoundedIcon,
  MailRounded as MailRoundedIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/OutletCss.css";
import { styled, useTheme } from "@mui/material/styles";
import oneDay from "../../../assets/images/places/oneday.jpg";
import moment from "moment";
import { THEMEColor } from "../../../assets/THEMES";
import emailjs from "@emailjs/browser";
// require("dot")
function ContactUs() {
  const theme = useTheme();
  const form = useRef();
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
  const [openAlert, setOpenAlert] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();

    const serviceID = "service_n2nymz7";
    const templateID = "template_7ap0n3p";
    const publickey = "jJhGOvecr6Fg00Xcl";

    try {
      emailjs.sendForm(serviceID, templateID, form.current, publickey).then(
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
        mobile: null,
        altMobile: null,
        noOfTravel: null,
        vehicle: "",
        travelDate: moment(),
        desc: "",
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
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <>
      {" "}
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
                    variant="h4"
                    className="about-company"
                    sx={{
                      textAlign: isMobile || isDeviceDown ? "center" : "",
                    }}
                  >
                    <span></span>Contact Us
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
                    Get in Touch with Trivandrum Trip Maker
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box width="100%">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3946.0887645191365!2d76.90420917501262!3d8.490750291550679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjknMjYuNyJOIDc2wrA1NCcyNC40IkU!5e0!3m2!1sen!2sin!4v1695636433637!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box className="contact-us-bg">
          <div
            style={{ background: " rgba(255, 255, 255, 0.82)", height: "100%" }}
          >
            {/* <Box sx={{width:"100%",height:"100%",     background: " rgba(0,0,0, 0.5)",}}> */}

            <Container fixed sx={{ height: "100%" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                // alignItems={"center"}
                sx={{ height: "100%" }}
                gap={"20px"}
              >
                <Grid container spacing={4}>
                  <Grid item md={6}>
                    <Box
                      height={"100%"}
                      display="flex"
                      flexDirection={"column"}
                      gap={"25px"}
                      width="80%"
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins-SemiBold",
                          color: THEMEColor.buttons,
                        }}
                      >
                        Have Any Questions?
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Poppins-Light",
                          color: THEMEColor.buttons,
                        }}
                      >
                        Don&apos;t hesitate to reach out if you have any queries
                        or need assistance. We&apos;re here to help and ensure
                        your journey with us is seamless and enjoyable. Contact
                        us today for prompt and friendly support.
                      </Typography>
                      <Box display="flex" gap={"10px"} height="100%">
                        <Box display="flex" alignItems={"center"}>
                          <IconButton
                            disableFocusRipple
                            disableTouchRipple
                            disableRipple
                            sx={{
                              borderRadius: 0,
                              ":active": { borderRadius: 0 },
                              backgroundColor: THEMEColor.buttons,
                              color: THEMEColor.Secondary,
                              padding: "10px",
                            }}
                          >
                            <CallRoundedIcon />
                          </IconButton>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection={"column"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontFamily: "Poppins-SemiBold" }}
                          >
                            Contact Number
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Bold",
                              color: THEMEColor.Secondary,
                            }}
                          >
                            +918086040400
                          </Typography>
                        </Box>
                      </Box>{" "}
                      <Box display="flex" gap={"10px"} height="100%">
                        <Box display="flex" alignItems={"center"}>
                          <IconButton
                            disableFocusRipple
                            disableTouchRipple
                            disableRipple
                            sx={{
                              borderRadius: 0,
                              ":active": { borderRadius: 0 },
                              backgroundColor: THEMEColor.buttons,
                              color: THEMEColor.Secondary,
                              padding: "10px",
                            }}
                          >
                            <MailRoundedIcon />
                          </IconButton>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection={"column"}
                          justifyContent={"space-between"}
                          alignItems={"flex-start"}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-SemiBold",
                              float: "left",
                            }}
                          >
                            Email Id
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Bold",
                              color: THEMEColor.Secondary,
                            }}
                          >
                            trivandrumtripmaker@gmail.com
                          </Typography>
                        </Box>
                      </Box>{" "}
                      <Box display="flex" gap={"10px"} height="100%">
                        <Box display="flex" alignItems={"center"}>
                          <IconButton
                            disableFocusRipple
                            disableTouchRipple
                            disableRipple
                            sx={{
                              borderRadius: 0,
                              ":active": { borderRadius: 0 },
                              backgroundColor: THEMEColor.buttons,
                              color: THEMEColor.Secondary,
                              padding: "10px",
                            }}
                          >
                            <LocationOnIcon />
                          </IconButton>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection={"column"}
                          justifyContent={"space-between"}
                          alignItems={"flex-start"}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontFamily: "Poppins-SemiBold" }}
                          >
                            Address
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Poppins-Bold",
                              color: THEMEColor.Secondary,
                            }}
                          >
                            TC 89/1162, Near wireless station, Beach Post,
                            Trivandrum 695007
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box
                      height={"100%"}
                      display="flex"
                      flexDirection={"column"}
                      gap={"25px"}
                      alignItems={"flex-start"}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Poppins-SemiBold",
                          color: THEMEColor.buttons,
                        }}
                      >
                        Contact With US!
                      </Typography>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        width="100%"
                        gap="20px"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <form
                            ref={form}
                            style={{ width: "100%" }}
                            onSubmit={handleSubmit}
                          >
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
                            </Box>
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
                                  handleValueChange(
                                    "noOfTravel",
                                    e.target.value
                                  );
                                }}
                              />
                            </FormControl>

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
                              // sx={{my:2}}
                            >
                              Submit
                            </Button>
                          </form>
                        </Box>
                        {openAlert ? (
                          <Alert
                            onClose={() => {
                              setOpenAlert(false);
                            }}
                          >
                            Thanks for submitting!
                          </Alert>
                        ) : null}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
            {/* </Box> */}
          </div>
        </Box>
      </div>
    </>
  );
}

export default ContactUs;
