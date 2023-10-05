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
import { useTheme } from "@mui/material/styles";
import honeymoon from "../../../../assets/images/tour/honeymoon.jpg";
import { THEMEColor } from "../../../../assets/THEMES";

function HoneyMoonTour() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
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
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default HoneyMoonTour;
