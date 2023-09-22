import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import landImage from "../../../assets/images/wallpaperflare.com_wallpaper (4).jpg";
import { useTheme } from "@mui/material/styles";
import { THEMEColor } from "../../../assets/THEMES";
function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDevice = useMediaQuery(theme.breakpoints.up("md"));
  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeDeviceUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargeDeviceDown = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <div
        style={{
          marginTop: isLargeDeviceUp
            ? "6%"
            : isMobile
            ? "16.5%"
            : isDeviceDown
            ? ""
            : isDevice || isLargeDeviceDown
            ? "6%"
            : "",
          height: "100%",
        }}
      >
        {/* <Box width={"99vw"}> */}
        <Box
          sx={{
            backgroundImage: `url("${landImage}")`,

            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            height: "500px",
            minWidth: "100%",
          }}
        >
          <Container fixed sx={{ height: "100%" }}>
            <Box height={"100%"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ height: "100%" }}
              >
                <Typography variant="h2" sx={{ fontFamily: "Barlow-Bold" }}>
                  Experience the beauty of Kerala
                </Typography>
                <Typography>
                  We make your trip memorable and peaceful. We offer affordable
                  and convenient Travel plans for everyone.
                </Typography>
                <Button
                  sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    textTransform: "capitalize",
                    backgroundColor: THEMEColor.PRIMARY,
                    color: THEMEColor.buttons,
                  }}
                  variant="contained"
                >
                  Book a Trip
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* </Box> */}
      </div>
    </>
  );
}

export default LandingPage;
