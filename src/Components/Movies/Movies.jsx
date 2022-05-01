import { Grid } from "@mui/material";
import React from "react";
import Collections from "./Collections/Collections";

const Movies = ({ moviesList,moviesDetailsHandler }) => {
  return (
    <Grid
      container
      sx={{
        py: 4,
        px: 5,
        justifyContent: "center",
        backgroundColor: "#EFEFE7",
      }}
    >
      <Collections moviesList={moviesList} moviesDetailsHandler={moviesDetailsHandler} />
    </Grid>
  );
};

export default Movies;
