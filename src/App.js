import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Details from "./Components/Movies/Details/Details";

function App() {
  const [moviesList, setMoviesList] = useState();
  const [moviesDetails, setMoviesDetails] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((repos) => {
      const allRepos = repos.data;
      if (allRepos.length === 0) {
        return;
      }
      setMoviesList(allRepos);
    });
  }, []);

  if (moviesList === undefined) {
    return;
  }

  const moviesDetailsHandler = (item) => {
    setMoviesDetails(item.show);
    navigate("/details");
  };


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              moviesList={moviesList}
              moviesDetailsHandler={moviesDetailsHandler}
            />
          }
        />
        <Route path="/details" element={<Details moviesDetails={moviesDetails} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
