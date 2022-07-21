import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h3" sx={{ color: "whitesmoke" }}>
          Popular Movies
        </Typography>
      </Box>
    </>
  );
};

export default Home;
