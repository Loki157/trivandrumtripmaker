import { Alert } from "@mui/material";
import React from "react";

function AlertSnack({ openAlert, setOpenAlert }) {
  return (
    <Alert
      onClose={() => {
        setOpenAlert(false);
      }}
    >
      Thanks for submitting,We&apos;ll reach to you soon!
    </Alert>
  );
}

export default AlertSnack;
