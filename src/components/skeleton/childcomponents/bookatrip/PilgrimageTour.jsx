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
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { ArrowBackRounded as ArrowBackRoundedIcon, Call as CallIcon,
  WhatsApp as WhatsAppIcon, } from "@mui/icons-material";
import { useTheme, styled } from "@mui/material/styles";
import honeymoon from "../../../../assets/images/tour/honeymoon.jpg";
import { THEMEColor } from "../../../../assets/THEMES";
import emailjs from "@emailjs/browser";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import PilgrimageTour1 from "../../../../assets/images/tour/pilgrimage1.jpg";
import { inclusions, pilgrimagePlan } from "../../../../assets/rides";
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
  },width:"100%"
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
function PilgrimageTour() {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [expanded, setExpanded] = React.useState("pane20");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
  const form = useRef();
  const exceptThisSymbols = ["e", "E", "+", "-", ".", "ArrowUp", "ArrowDown"];
  const vehicleType = ["4-Seater", "7-Seater", "12-Seater", "other"];
  const handleValueChange = (stateName, value) => {
    setReqACall({ ...reqACall, [stateName]: value });
  };
  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };
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
      // setOpenAlert(true);
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
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      style={{
        marginTop: isDevice ? "9px" :isMobile||isDeviceDown?"-33.3px": "-28px",
        height: "100%",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",justifyContent:"space-between"
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
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
            <IconButton
              sx={{
                backgroundColor: THEMEColor.Secondary,
                color: THEMEColor.PRIMARY,
                transition: "0.2s all",
                "&:hover": { backgroundColor: "#0a6d2e" },
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <Box sx={{ width:"100%" }}>
              <img src={PilgrimageTour1} height={"100%"} width="100%" />
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
                variant={isMobile || isDeviceDown ? "h6" : "h5"}
                sx={{
                  fontFamily: "Poppins-Bold",
                  color: THEMEColor.buttons,
                  textAlign: "center",
                  // width: "80%",
                }}
                className="oneday-heading"
              >
                Pilgrimage Package
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily:isMobile || isDeviceDown ?"Poppins-Regular": "Poppins-Medium",
                  color: THEMEColor.buttons,
                  // textAlign: "center",
                  // lineHeight: "20px",
                }}
              >
                At &nbsp;
                  <span className="highlight-text">
                    <a onClick={() => navigate(ROUTEPATH.MAIN)}>
                      TrivandrumTripMaker.com
                    </a>
                  </span>{" "}
                  &nbsp;, we believe that pilgrimage is more
                than just a physical journey; it&apos;s a spiritual quest that
                rejuvenates the mind and uplifts the spirit. Our pilgrimage
                packages offer a harmonious blend of faith, culture, and
                exploration, guiding you to some of the most revered temples and
                spiritual destinations in the region. Join us on this sacred
                voyage and let your heart and soul find solace in the divine.
              </Typography>
            </Box>
            <Box
              height={"100%"}
              display="flex"
              flexDirection={"column"}
              gap={"25px"}
              alignItems={"flex-start"}
              width={"100%"}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins-SemiBold",
                  color: THEMEColor.buttons,
                }}
              >
                Request a Callback!
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
                      sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
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
                            handleValueChange("noOfTravel", e.target.value);
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
                      </Button>         <Divider
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
                <Box
              height={"100%"}
              display="flex"
              flexDirection={"column"}
              gap={"25px"}
              alignItems={"flex-start"}
              width={"100%"}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins-SemiBold",
                  color: THEMEColor.buttons,
                }}
              >
                Details:
              </Typography>
              {pilgrimagePlan.map((i, ind) => {
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
                          variant={isMobile || isDeviceDown ?"caption":"body1"}
                          sx={{
                            fontFamily: "Poppins-SemiBold",
                            color: THEMEColor.PRIMARY,
                          }}
                        >
                          Day #{ind + 1} - {i.place}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          // bgcolor={THEMEColor.PRIMARY}
                          // height={"100%"}
                          // width="100%"
                          display={"flex"}
                          flexDirection={"column"}
                          gap="10px"
                        >
                          <ul>
                            {i.points.map((item) => {
                              return (
                                <>
                                  <li>
                                    <span
                                      style={{ fontFamily:isMobile || isDeviceDown ?"Poppins-Regular": "Poppins-SemiBold" }}
                                    >
                                      {item}
                                    </span>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </>
                );
              })}
            </Box>  <Box
              height={"100%"}
              display="flex"
              flexDirection={"column"}
              gap={"25px"}
              alignItems={"flex-start"}
              width={"100%"}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins-SemiBold",
                  color: THEMEColor.buttons,
                }}
              >
                Inclusion:
              </Typography>
              <Box
                          // bgcolor={THEMEColor.PRIMARY}
                          // height={"100%"}
                          // width="100%"
                          display={"flex"}
                          flexDirection={"column"}
                          gap="10px"
                        >
                          <ul>
                            {inclusions.honey.map((item) => {
                              return (
                                <>
                                  <li>
                                    <span
                           style={{ fontFamily:isMobile || isDeviceDown ?"Poppins-Regular": "Poppins-SemiBold",fontSize: isMobile || isDeviceDown ?"12px":""}}
                                    >
                                      {item}
                                    </span>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </Box>
              
              </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default PilgrimageTour;
