import React from "react";
import { Star } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "./Collections.scss";

const Collections = ({ moviesList,moviesDetailsHandler }) => {
  return (
    <>
      {moviesList.map((item) => {
        const img = item.show.image !== null ? item.show.image.original : "";
        const rating =
          item.show.rating.average !== null ? item.show.rating.average : "N/A";
        const date = item.show.premiered.slice(0, 4);
        return (
          <Grid
            item
            onClick={()=>moviesDetailsHandler(item)}
            key={item.show.id}
            sx={{ mx: 5, my: 3 }}
            className="collections-box"
          >
            <Card sx={{ width: 300 }}>
              <CardMedia
                component="img"
                image={img}
                alt={item.show.name}
                sx={{ objectFit: "contain", height: "200px", mt: 1 }}
              />
              <CardContent sx={{ maxWidth: "300px", textAlign: "center" }}>
                <Button sx={{ fontSize: "1.1rem" }}>{item.show.name}</Button>
              </CardContent>
              <CardActions>
                <Typography>
                  <Star sx={{ color: "#d4b41f" }} /> &nbsp;
                  {rating}
                </Typography>
                <Typography>{date}</Typography>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Collections;
