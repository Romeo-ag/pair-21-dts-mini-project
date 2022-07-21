// di sini kita import apis/tmdb.js
import tmdb from "../apis/tmdb";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import "./ListMovies.css";
import CardMovie from "../components/CardMovie";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get("/movie/popular");
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <div className="bg-gray">
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {movies.map((movie) => {
          return <CardMovie key={movie.id} propsMovie={movie} />;
        })}
      </Box>
    </div>
  );
};

export default ListMovies;
