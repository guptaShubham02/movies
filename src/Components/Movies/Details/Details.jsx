import React from "react";

import { Bolt, Star } from "@mui/icons-material";
import { Button, Card, CardActions, Grid, Typography } from "@mui/material";

const Details = ({ moviesDetails }) => {
  const rating =
    moviesDetails.rating.average !== null ? moviesDetails.rating.average : "N/A";

    const date = moviesDetails.premiered.slice(0, 4);
    const country = moviesDetails.network && moviesDetails.network.country.name;
    const site = moviesDetails.officialSite ===null? 'N/A':moviesDetails.officialSite;
    const img = moviesDetails.image !== null ? moviesDetails.image.original : "";
  return (
    <>
      <Card sx={{ mt: 3, mx: 6 }}>
        <Grid container py={5} px={2}>
          <Grid item lg={5}>
            <img src={img} maxWidth={600} height={600} />
          </Grid>
          <Grid item lg={7} pt={2}>
            <Typography variant="h5" mb={4}>
              {moviesDetails.name}
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: "50px", pr: 8, pb: 3,fontSize:'1rem' }}>
              {moviesDetails.summary}
            </Typography>
            <Typography sx={{ color: "purple" }}>
              <span><Star sx={{ color: "#d4b41f" }} /> &nbsp;{rating}</span> &nbsp;|&nbsp; <span>{date}</span>&nbsp;|&nbsp;{" "}
              <span>{country}</span>
            </Typography>
            <Typography pt={2}>Language: {moviesDetails.language}</Typography>
            <Typography pt={2}>Genres: {moviesDetails.genres}</Typography>
            <Typography pt={2}>Type: {moviesDetails.type}</Typography>
            <Typography py={2}>Official Site: <a href={site} target="_blank">{site}</a></Typography>
          </Grid>
        </Grid>
        <CardActions sx={{ justifyContent: "center", mb: 5 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#FB641B !important", px: 15, py: 1 }}
            startIcon={<Bolt />}
          >
            Watch Now
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Details;
