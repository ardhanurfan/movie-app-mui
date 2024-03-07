import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieStateType {
  movies: MovieDataType[];
}

const initialMovieState: MovieStateType = {
  movies: moviesData,
};

export enum MOVIE_ACTION_TYPE {
  TOOGLE_BOOKMARK = "TOOGLE_BOOKMARK",
}

interface MovieAction {
  type: string;
  id: string;
}

const MovieReducer = (
  state: MovieStateType,
  action: MovieAction
): MovieStateType => {
  switch (action.type) {
    case MOVIE_ACTION_TYPE.TOOGLE_BOOKMARK:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id == action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};

const MovieContext = createContext<{
  state: MovieStateType;
  dispatch: Dispatch<MovieAction>;
}>({ state: initialMovieState, dispatch: () => null });

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
