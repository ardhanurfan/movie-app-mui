import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { MovieDataType } from "../../assets/data";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import { useContext } from "react";
import MovieContext, { MOVIE_ACTION_TYPE } from "../../context/movie-context";

function MovieCard({ movie }: { movie: MovieDataType }) {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({
      type: MOVIE_ACTION_TYPE.TOOGLE_BOOKMARK,
      id: id,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "transparent",
        color: "#E0E0E0",
        my: 3,
        border: "none",
      }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt={movie.title}
              style={{ width: "400px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#E0E0E0"}
                  aria-label="Year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === "Movies" ? moviesIcon : tvSeriesIcon}
                  alt={movie.category}
                  width={16}
                  height={16}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#E0E0E0"}
                  aria-label="Movie Category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color={"#E0E0E0"}
                  aria-label="Movie Rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography color={"#E0E0E0"} aria-label="Movie Title" padding={0}>
              {movie.title}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
            onClick={() => handleToggleBookmark(movie.id)}
          >
            {movie.isBookmarked ? (
              <BookmarkIcon fill={"#E0E0E0"} />
            ) : (
              <BookmarkEmptyIcon />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
