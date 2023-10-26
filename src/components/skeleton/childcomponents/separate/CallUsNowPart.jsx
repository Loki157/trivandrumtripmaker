import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Card,
  IconButton,
} from "@mui/material";
import { CallRounded as CallRoundedIcon } from "@mui/icons-material";
import { ROUTEPATH } from "../../../ROUTEPATH";
import { useNavigate } from "react-router";
function CallUsNowPart({ theme, isDeviceDown, isMobile, THEMEColor, oneDay }) {
  const navigate=useNavigate()
  return (
    <Box
      sx={{
        backgroundImage: `url("${oneDay}")`,
        backgroundPositionY: isMobile || isDeviceDown ? "50%" : "70%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: isMobile || isDeviceDown ? "400px" : "350px",
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
              width: isMobile || isDeviceDown ? "100%" : "60%",
              justifyContent: "center",
              gap: "20px",
            }}
            className="about-box"
          >
            <Typography
              variant={isMobile || isDeviceDown ? "h5" : "h4"}
              sx={{
                fontFamily:
                  isMobile || isDeviceDown
                    ? "Poppins-Medium"
                    : "Poppins-SemiBold",
                color: THEMEColor.PRIMARY,
                textAlign: isMobile || isDeviceDown ? "center" : "",
              }}
            >
              Call Us Now{" "}
              <span className="highlight-text book" style={{ fontFamily:
                  isMobile || isDeviceDown
                    ? "Poppins-Medium "
                    : "Poppins-SemiBold",}}>
                    <a onClick={() => navigate(ROUTEPATH.TOURPLAN)}>
                    Book Your Ride
                    </a>
                  </span>
              &nbsp;For Your Next Wonderful Journey!
            </Typography>{" "}
            <Typography
              variant={isMobile || isDeviceDown ? "caption" : "body2"}
              sx={{
                fontFamily: "Poppins-Regular",
                color: THEMEColor.PRIMARY,
                textAlign: isMobile || isDeviceDown ? "center" : "",
              }}
            >
              We are your trusted companion for exploring the enchanting city of
              Kerala.Choose us for a seamless and memorable travel experience.
            </Typography>
            <Box
              display="flex"
              gap={"10px"}
              height="20%"
              justifyContent={
                isMobile || isDeviceDown ? "center" : "flex-start"
              }
              width={"100%"}
            >
              <Box display="flex" alignItems={"center"}>
                <IconButton
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  sx={{
                    borderRadius: 0,
                    ":active": { borderRadius: 0 },
                    backgroundColor: "#313b30",
                    color: THEMEColor.Secondary,
                    padding: "10px",
                  }}
                >
                  <CallRoundedIcon />
                </IconButton>
              </Box>
              <Box
                height={"100%"}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start "}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily:
                      isMobile || isDeviceDown
                        ? "Poppins-Medium"
                        : "Poppins-SemiBold",
                    color: THEMEColor.PRIMARY,
                  }}
                >
                  Contact Number
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
                      color: THEMEColor.PRIMARY,
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
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default CallUsNowPart;
