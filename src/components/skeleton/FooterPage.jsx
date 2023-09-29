import { Container, useMediaQuery } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import logo from "../../assets/svg/TTM_Black Letter.svg";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  MailRounded as MailRoundedIcon,
  CallRounded as CallRoundedIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { ROUTEPATH } from "../ROUTEPATH";
function FooterPage() {
  const theme = useTheme();

  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isDeviceDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div id="footer" className="footer">
        <Container>
          <div
            className="footer-split"
            style={{
              gridTemplateColumns:
                isMobile || isDeviceDown ? "100%" : "30% 23% 23% 23%",
            }}
          >
            <div className="footer-box-1">
              <div className="footer-box-img">
                <img src={logo} />
              </div>
              <div>
                <p>
                  Trivandrum trip makers is a car booking service provider that
                  offers safe and comfortable trips in trivandrum. we committed
                  to providing the best travel experience to our customers.
                </p>
              </div>
            </div>
            <div className="footer-box-2">
              <h2>Quick Links</h2>
              <ul>
                <li
                  onClick={() => {
                    navigate(ROUTEPATH.HOME);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                  Home
                </li>
                <li
                  onClick={() => {
                    navigate(ROUTEPATH.PLACES);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                  Place
                </li>
                <li
                  onClick={() => {
                    navigate(ROUTEPATH.ABOUT);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                  About
                </li>
                <li
                  onClick={() => {
                    navigate(ROUTEPATH.CONTACT);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="footer-box-3">
              <h2>Contact Details</h2>
              <div className="contactus-details-1">
                <h3>Phone Number</h3>
                <div>
                  <CallRoundedIcon
                    sx={{
                      fontSize: 18,
                      marginRight: "10px",
                      backgroundColor: "#3dae2b",
                      color: "white",
                      padding: "5px",
                    }}
                  />
                  <text>+918086040400</text>
                </div>
              </div>
              <div className="contactus-details-1">
                <h3>Email</h3>
                <div>
                  <MailRoundedIcon
                    sx={{
                      fontSize: 18,
                      marginRight: "10px",
                      backgroundColor: "#3dae2b",
                      color: "white",
                      padding: "5px",
                    }}
                  />
                  <text> trivandrumtripmaker@gmail.com</text>
                </div>
              </div>
              <div className="contactus-details-2">
                <h3>Address</h3>
                <div>
                  <LocationOnIcon
                    sx={{
                      fontSize: 18,
                      marginRight: "10px",
                      backgroundColor: "#3dae2b",
                      color: "white",
                      padding: "5px",
                    }}
                  />
                  <text>
                    Puunamoodu House TC 89/1162, Near wireless station, Beach
                    Post, Trivandrum-695007
                  </text>
                </div>
              </div>
            </div>
            {/* <div className="footer-box-4">cfsd</div> */}
          </div>
        </Container>
        <div
          className="footer-copyrights"
          style={{
            fontFamily:
              isMobile || isDeviceDown ? "Poppins-Medium" : "Poppins-SemiBold",
            fontSize: isMobile || isDeviceDown ? "10px" : "",
            textTransform: "capitalize",
          }}
        >
          © 2023 TRIVANDRUM TRIP MAKER. ALL RIGHTS RESERVED.
        </div>
      </div>
    </>
  );
}

export default FooterPage;
