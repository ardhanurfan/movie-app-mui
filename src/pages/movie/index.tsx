import { Box, Typography } from "@mui/material";
import Layout from "../../Layout";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { useState, useContext } from "react";
import MovieContext from "../../context/movie-context";

function Movie() {
  const [search, setSearch] = useState("");
  const [movieSearchList, setMovieSearchList] = useState<MovieDataType[]>([]);
  const movies = useContext(MovieContext).state.movies.filter(
    (movie) => movie.category === "Movie"
  );

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
    setMovieSearchList(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <Layout search={search} onChange={handleSearch}>
      <Box sx={{ py: 2, px: 4 }}>
        {search == "" ? (
          <Box width={"100%"}>
            <Typography variant="h5" component={"h1"} my={6} fontWeight={400}>
              Movies
            </Typography>
            <MovieList recommendList={movies} />
          </Box>
        ) : (
          <Box width={"100% "}>
            <Typography>
              Found {movieSearchList.length} result for "{search}"
            </Typography>
            <MovieList recommendList={movieSearchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default Movie;
