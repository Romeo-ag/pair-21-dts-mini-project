import React from "react";
import { Box, Card, CardMedia, CardContent, Rating, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Di sini kita mengetahui bahwa nantinya CardMovie akan menerima
// suatu data dari ListMovie, maka kita langsung saja
// menerima props di sini
const CardMovie = ({ propsMovie }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    // di sini kita menggunakan Component Card dari MUI
    <Card sx={{ width: "fit-content", background: "rgb(46,46,46,0.0)" }}>
      {/* <Box>
        <Typography variant="h6">Component CardMovie</Typography>
      </Box> */}
      <Box className="boxy" sx={{ display: "flex", flexDirection: "column", alignItems: "start", height: "fit-content" }}>
        {/* 
          Card ada 2 tipe yang bisa dimasukkan sebagai isinya: 
          CardMedia dan CardContent 
        */}
        <CardMedia
          component="img"
          className="zoom"
          // Kita gunakan image berdasarkan prefix dari image tmdb
          image={`${baseUrlForMovie}${propsMovie.poster_path}`}
          // image={propsMovie.poster_path}
          alt={propsMovie.title}
        ></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "30vh",
          }}
        >
          <Typography component="div" variant="body1">
            {propsMovie.title}
          </Typography>
          {/* 
            Karena ratingnya hanya menggunakan 5 bintang, dan rating dari
            JSON kita lebih dari 10, maka kita bagi 2

            Precision untuk menyatakan ratingnya itu dibuatkan gambarnya hingga
            per seberapanya? (0.1 = sampai 1 koma di belakang angka)
           */}
          <Rating value={propsMovie.vote_average / 2} precision={0.1} readOnly />
          <Link to={`/DetailMovie/${propsMovie.id}`}>
            <Button variant="contained">Details</Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardMovie;
