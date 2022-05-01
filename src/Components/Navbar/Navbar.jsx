import React from "react";
import { Home } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#1478AA",
        }}
      >
        <Grid item>
          <Button>
            <Link to="/">
              <Home sx={{ fontSize: "2.5rem", color: "white !important" }} />
            </Link>
          </Button>
        </Grid>
        <Grid item>
          <Box>
            <Container maxWidth="md">
              <Grid
                container
                className="filterItems"
                sx={{ justifyContent: "space-between", mx: 3 }}
              >
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>All Movies</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>Drama</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>Comedy</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>Legal </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>Sports </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className="filterButton"
                    size="small"
                    sx={{
                      flexDirection: "column",
                      p: 2,
                      color: "white !important",
                    }}
                  >
                    <Typography>Animation</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default Navbar;
