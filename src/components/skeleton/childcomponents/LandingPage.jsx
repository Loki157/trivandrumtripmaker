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
            height: isMobile || isDeviceDown ? "400px" : "500px",
            minWidth: "100%",
            // filter: "brightness(50% )",
          }}
        >
          <Box
            sx={{
              height: "100%",
              background: " rgba(0,0,0, 0.4)",
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
                height={"100%"}
                sx={{ padding: isMobile || isDeviceDown ? "20px" : "" }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                  alignItems={
                    isMobile || isDeviceDown ? "center" : "flex-start"
                  }
                  justifyContent={"center"}
                  sx={{
                    height: "100%",
                    width: isMobile || isDeviceDown ? "100%" : "50%",
                  }}
                >
                  <Typography
                    variant={isMobile || isDeviceDown ? "h3" : "h2"}
                    sx={{
                      fontFamily:
                        isMobile || isDeviceDown
                          ? "Barlow-Medium"
                          : "Barlow-SemiBold",
                      color: THEMEColor.PRIMARY,
                      textAlign: isMobile || isDeviceDown ? "center" : "left",
                    }}
                  >
                    Experience the beauty of Kerala
                  </Typography>
                  <Typography
                    variant={isMobile || isDeviceDown ? "caption" : "body1"}
                    sx={{
                      fontFamily: "Barlow-Regular",
                      color: THEMEColor.PRIMARY,
                    }}
                  >
                    We make your trip memorable and peaceful. We offer
                    affordable and convenient Travel plans for everyone.
                  </Typography>
                  <Button
                    className="book-trip-btn"
                    sx={{ boxShadow: 0 }}
                    variant="contained"
                  >
                    Book a Trip
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
        {/* </Box> */}
      </div>
      <Container fixed sx={{ height: "100%" }}></Container>
    </>
  );
}

export default LandingPage;
