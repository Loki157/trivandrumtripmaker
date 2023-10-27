import { useEffect, useState } from "react";

import {
  Backdrop,
  Box,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import "../styles/MainPage.css";
import { Outlet } from "react-router-dom";
import HeaderPage from "./skeleton/HeaderPage";
import FooterPage from "./skeleton/FooterPage";
import { useTheme } from "@mui/material/styles";
import {
  ArrowUpwardRounded as ArrowUpwardRoundedIcon,
  CallOutlined as CallOutlinedIcon,
  WhatsApp as WhatsAppIcon,
  MailOutline as MailOutlineIcon,
} from "@mui/icons-material";
import { THEMEColor } from "../assets/THEMES";
import Loader from "./Loader";
const actions = [
  {
    icon: <CallOutlinedIcon />,
    name: "+918547676840",
    open: "tel:+918086040400",
  },
  {
    icon: <CallOutlinedIcon />,
    name: "+918086040400",
    open: "tel:+918086040400",
  },
  {
    icon: <WhatsAppIcon />,
    name: "Go to WhatsApp Chat",
    open: "https://wa.me/message/5QKJSYVWLPELD1",
  },
  {
    icon: <MailOutlineIcon />,
    name: "trivandrumtripmaker@gmail.com",
    open: "mailto:trivandrumtripmaker@gmail.com",
  },
];
function MainPage() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener("load", () => {
        setIsLoading(false);
      });
    };
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        {isVisible && (
          <IconButton className="scroll-to-top-button" onClick={scrollToTop}>
            <ArrowUpwardRoundedIcon />
          </IconButton>
        )}
        <div style={{ width: "100%", height: "100%" }}>
          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            sx={{
              position: "fixed",
              bottom: 16,
              left: 16,

              width: "100%",
              alignItems: "flex-start",
            }}
            FabProps={{
              sx: {
                backgroundColor: THEMEColor.Secondary,
                transition: "0.3s all !important",
                "&:hover,&:active": {
                  backgroundColor: THEMEColor.PRIMARY,
                  color: THEMEColor.Secondary,
                },
              },
            }}
            icon={<SpeedDialIcon />}
            onClose={(event, reason) => {
              if (reason === "mouseLeave" && open === true) {
                handleOpen();
              }
              // handleClose
            }}
            onOpen={(event, reason) => {
              if (reason === "mouseEnter") {
                handleClose();
              }
            }}
            onClick={(event, reason) => {
              setOpen((open) => !open);
            }}
            open={open}
            direction="up"
          >
            {actions.map((action) => (
              <SpeedDialAction
                sx={{
                  "&.MuiSpeedDialAction-staticTooltip .MuiSpeedDialAction-staticTooltipLabel":
                    { left: "100%", width: "240px", cursor: "pointer" },
                }}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                FabProps={{
                  sx: {
                    backgroundColor: THEMEColor.Secondary,
                    color: THEMEColor.PRIMARY,
                    transition: "0.2s all",
                    "&:hover,&:active": {
                      backgroundColor: THEMEColor.PRIMARY,
                      color: THEMEColor.Secondary,
                    },
                  },
                }}
                onClick={() => {
                  window.open(action.open, "_blank");
                }}
              />
            ))}
          </SpeedDial>
        </div>
        {/* <Box className="main"> */}
        <Box className="main-head" id="main-head-scroll">
          {/* <Box position={"relative"} width={"100%"}> */}
          <Box>
            <header style={{ minHeight: "10vh" }}>
              <HeaderPage />
            </header>
            {/* </Box> */}
            <Box className="container">
              <Backdrop open={open} />
              <Outlet />
            </Box>
            <footer>
              <FooterPage />
            </footer>
          </Box>
        </Box>
        {/* </Box> */}
      </>
    );
  }
}

export default MainPage;
