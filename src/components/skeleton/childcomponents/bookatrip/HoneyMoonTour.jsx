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
import { ArrowBackRounded as ArrowBackRoundedIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import honeymoon from "../../../../assets/images/tour/honeymoon.jpg";
import { THEMEColor } from "../../../../assets/THEMES";
import emailjs from "@emailjs/browser";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
function HoneyMoonTour() {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
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
        marginTop: isLargeDeviceUp ? "7.1vh" : isDevice ? "4.8vh" : "5vh",
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
                color: THEMEColor.PRIMARY,transition:"0.2s all",
                "&:hover": { backgroundColor: "#0a6d2e" },
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackRoundedIcon />
            </IconButton>
            <Box sx={{ width: "60%" }}>
              <img src={honeymoon} height={"100%"} width="100%" />
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
                Honeymoon Package
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
                Escape the ordinary and embark on a journey filled with love,
                laughter, and cherished memories. Our exclusive honeymoon tour
                package offers a seamless blend of picturesque locations, cozy
                accommodations, and authentic experiences that will make your
                honeymoon truly special. From serene beach walks to backwater
                cruises and cultural encounters, Trivandrum Trip Maker promises
                a romantic escapade that will leave you both enchanted.
              </Typography>
            </Box>
            <Box
              height={"100%"}
              display="flex"
              flexDirection={"column"}
              gap={"25px"}
              alignItems={"flex-start"}
              width={"60%"}
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
                      </Button>
                    </Box>
                  </form>
                </Box>
                {/* {openAlert ? (
                          <Alert
                            onClose={() => {
                              setOpenAlert(false);
                            }}
                          >
                            Thanks for submitting!
                          </Alert>
                        ) : null} */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default HoneyMoonTour;
