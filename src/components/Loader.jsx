import React from "react";
import "../styles/MainPage.css";
import logo from "../assets/svg/TTM_Black Letter.svg";
function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "145px",
          display: "flex",
          flexDirection: "column",
          //   gap: "20px",
          justifyContent: "center",
        }}
      >
        <div className="blink-2">
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: " center",
              alignItems: "end",
            }}
          >
            <img src={logo} width={"100%"} />
          </div>
        </div>

        <div className="progress"></div>
      </div>
    </div>
  );
}

export default Loader;
