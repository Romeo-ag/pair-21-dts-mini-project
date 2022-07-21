import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, CardContent, Rating, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DetailMovie = () => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  const [movies, setMovies] = useState([]);
  let params = useParams();

  useEffect(() => {
    const MovieID = params.movieId;

    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          `/movie/${MovieID}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, [params.movieId]);

  return (
    <div style={{ backgroundImage: "conic-gradient(at left top, rgb(14, 165, 233), rgb(254, 215, 170), rgb(202, 138, 4))", height: "100vh" }}>
      <Navbar />
      <Card className="boxy" sx={{ opacity: 1, background: "rgba(79, 79, 79, 0.12)" }}>
        {/* <Box>
        <Typography variant="h6">Component CardMovie</Typography>
      </Box> */}
        <Box className="boxy" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {/* 
          Card ada 2 tipe yang bisa dimasukkan sebagai isinya: 
          CardMedia dan CardContent 
        */}
          <CardMedia
            component="img"
            sx={{ width: "fit-content", height: "50vh", objectFit: "cover" }}
            // Kita gunakan image berdasarkan prefix dari image tmdb
            image={`${baseUrlForMovie}${movies.poster_path}`}
            // image={movies.poster_path}
            alt={movies.title}
          ></CardMedia>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 1,
            }}
          >
            <Typography component="div" sx={{ fontWeight: "bold" }} variant="body1">
              {movies.title}
            </Typography>
            {/* 
            Karena ratingnya hanya menggunakan 5 bintang, dan rating dari
            JSON kita lebih dari 10, maka kita bagi 2

            Precision untuk menyatakan ratingnya itu dibuatkan gambarnya hingga
            per seberapanya? (0.1 = sampai 1 koma di belakang angka)
           */}
            <Rating value={movies.vote_average / 2} precision={0.1} readOnly />
            <Typography variant="body2">Release date: {movies.release_date}</Typography>
            <Typography variant="body2">Runtimes : {movies.runtime} Minutes</Typography>
            <Typography variant="body2">
              Synopsis : <br /> {movies.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Footer />
    </div>
  );
};

export default DetailMovie;
