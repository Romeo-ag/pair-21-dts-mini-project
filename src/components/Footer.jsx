import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="body3">
        Copyright &copy; {new Date().getFullYear()} Pair-21
        <a href="https://github.com/FadilArfat" style={{ color: "blue" }}>
          {" "}
          Fadil and{" "}
        </a>
        <a href="https://github.com/Romeo-ag" style={{ color: "blue" }}>
          Romeo
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
