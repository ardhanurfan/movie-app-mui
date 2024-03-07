import { Card, CardContent, Box, Stack, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { MovieDataType } from "../../assets/data";
import MovieContext, { MOVIE_ACTION_TYPE } from "../../context/movie-context";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";
import BookmarkIcon from "../icons/bookmark-icon";
import moviesIcon from "../../assets/icons/icon-category-movie.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";

function MovieTrendCard({ movie }: { movie: MovieDataType }) {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({
      type: MOVIE_ACTION_TYPE.TOOGLE_BOOKMARK,
      id: id,
    });
  };

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "hidden",
          display: "flex",
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius={"8px"}
        />
        <Stack
          mt={"6px"}
          spacing={0}
          position={"absolute"}
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
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
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "full",
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
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "full",
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
        </Stack>
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

export default MovieTrendCard;
