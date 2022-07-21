import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Home.module.css";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [user] = useAuthState(auth);
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
