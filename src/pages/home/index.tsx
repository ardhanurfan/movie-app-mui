import { Box, Typography } from "@mui/material";
import Layout from "../../Layout";
import { useContext, useState } from "react";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import MovieContext from "../../context/movie-context";
import MovieTrendList from "../../components/movie-list/MovieTrendList";

function Home() {
  const [search, setSearch] = useState("");
  const [movieSearchList, setMovieSearchList] = useState<MovieDataType[]>([]);
  const { movies } = useContext(MovieContext).state;
  const trendingList = movies.filter((movie) => movie.isTrending);
  const recommendList = movies.filter((movie) => !movie.isTrending);

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
            <Box width={"100%"}>
              <Typography variant="h5" component={"h1"} my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendList={trendingList} />
            </Box>
            <Box width={"100%"}>
              <Typography variant="h5" component={"h1"} my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
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

export default Home;
