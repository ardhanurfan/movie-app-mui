import { Box, Typography } from "@mui/material";
import { useState, useContext } from "react";
import Layout from "../../Layout";
import { MovieDataType } from "../../assets/data";
import MovieList from "../../components/movie-list";
import MovieContext from "../../context/movie-context";

function Bookmarks() {
  const [search, setSearch] = useState("");
  const [movieSearchList, setMovieSearchList] = useState<MovieDataType[]>([]);
  const bookmarks = useContext(MovieContext).state.movies.filter(
    (movie) => movie.isBookmarked
  );

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
    setMovieSearchList(
      bookmarks.filter((movie) =>
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
              Bookmarks
            </Typography>
            <MovieList recommendList={bookmarks} />
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

export default Bookmarks;
