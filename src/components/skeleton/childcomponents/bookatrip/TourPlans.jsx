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
  IconButton,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  Call as CallIcon,
  WhatsApp as WhatsAppIcon,
  ArrowBackRounded as ArrowBackRoundedIcon,
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
import emailjs from "@emailjs/browser";
import { tour } from "../../../../assets/rides";
import tourImg from "../../../../assets/images/tour/tour.jpg";
import { ROUTEPATH } from "../../../ROUTEPATH";
import HeaderHelmet from "../../../HeaderHelmet";
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
function TourPlans() {
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const XS = useMediaQuery(theme.breakpoints.up("xs"));
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
  const form = useRef();
  const [openAlert, setOpenAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_n2nymz7";

    const templateID = "template_d9f10qw";
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
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <HeaderHelmet  value={"Tour Packages for Honeymoon, Pilgrimage, and 5-Day Trips"}/>
      {" "}
      {/* {isVisible && (
        <button
          className="scroll-to-top-button"
          onClick={handleReqCallBackIntoView}
        >
          Check
        </button>
      )} */}
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
                    variant="h5"
                    className="about-company"
                    sx={{
                      textAlign: isMobile || isDeviceDown ? "center" : "",
                    }}
                  >
                    <span></span>Tour Plans
                  </Typography>
                  <Typography
                    variant={isMobile || isDeviceDown ? "h6" : "h4"}
                    sx={{
                      fontFamily: "Poppins-SemiBold",
                      color: THEMEColor.PRIMARY,
                      textAlign: "center",
                      width: isMobile || isDeviceDown ? "100%" : "80%",
                    }}
                  >
                    Explore, Experience, Embrace: Unveiling Our Tour Plans
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
                  Tour Packages for Honeymoon, Pilgrimage, and 5-Day Trips
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily:
                      isMobile || isDeviceDown
                        ? "Poppins-Regular"
                        : "Poppins-Medium",
                    color: THEMEColor.buttons,
                    // textAlign: "center",
                    // lineHeight: "20px",
                  }}
                >
                  Trivandrum Trip Maker: Your Gateway to Unforgettable Journeys
                  with Tour Packages for Honeymoon, Pilgrimage, and 5-Day Trips
                  Embark on a transformative journey with our thoughtfully
                  designed tour packages, offering a kaleidoscope of experiences
                  to enrich your life and create memories to last a lifetime.
                  <br />
                  <br />
                  Welcome to the world of boundless adventure, cultural
                  immersion, and unforgettable journeys! Our tour plans are
                  meticulously crafted to take you on a voyage of discovery,
                  offering a kaleidoscope of experiences that will enrich your
                  life and create memories to last a lifetime. At &nbsp;
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.MAIN)}>
                      TrivandrumTripMaker.com
                    </a>
                  </span>{" "}
                  &nbsp;, were&apos; passionate about turning your travel dreams
                  into reality. Join us on a transformative journey where every
                  moment is a chance to explore new horizons, experience the
                  world&apos;s wonders, and embrace the beauty of diverse
                  cultures. Get ready to embark on an incredible adventure with
                  our thoughtfully designed tour plans as your compass, guiding
                  you to the heart of unforgettable experiences.
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
                    About our Tour plans
                  </Typography>
                </Box>
                <Grid container spacing={6}>
                  {tour.map((i, index) => {
                    return (
                      <>
                        <Grid item md={4} sm={12} xs={12}>
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
                              delay:
                                index === 0 ? 0.1 : index === 1 ? 0.4 : 0.9,
                              ease: [0, 0.5, 0.2, 1.01],
                            }}
                          >
                            <div
                              style={{
                                width:
                                  isMobile || isDeviceDown ? "100%" : "100%",
                                border: "2px solid #3dae2b",
                                overflow: "hidden",
                                height: "680px",
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
                                <Button
                                  type="submit"
                                  variant="contained"
                                  // fullWidth
                                  sx={{ my: 2, boxShadow: 0 }}
                                  className="learnmore-btn"
                                  onClick={() => {
                                    navigate(i.nav);
                                  }}
                                >
                                  Read More
                                </Button>
                              </CardContent>
                              <div
                                style={{
                                  float: "right",
                                  marginTop:
                                    index === 1
                                      ? isMobile || isDeviceDown
                                        ? ""
                                        : "-30px"
                                      : isMobile || isDeviceDown
                                      ? "30px"
                                      : XS
                                      ? "60px"
                                      : "",
                                }}
                              >
                                <IconButton
                                  sx={{
                                    backgroundColor: THEMEColor.Secondary,
                                    color: THEMEColor.PRIMARY,
                                    transition: "0.2s all",
                                    "&:hover": { backgroundColor: "#0a6d2e" },
                                  }}
                                  onClick={() => navigate(-1)}
                                >
                                  <WhatsAppIcon />
                                </IconButton>
                              </div>
                            </div>
                            <CardActions> </CardActions>
                          </Card>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default TourPlans;
